import clsx from "clsx";
import { ClickAwayListener, Popper } from "@mui/material";
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  MouseEvent,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  IMenuItemProps,
  IMenuItemRef,
  IMenuLinkProps,
  IMenuSubProps,
  IMenuToggleProps,
  MenuHeading,
  MenuLink,
  MenuSub,
  MenuToggle,
  TMenuToggle,
  TMenuTrigger,
  useMenu,
} from "./";
import { useMatchPath, usePathname, useResponsiveProp } from "@/hooks";
import { getMenuLinkPath, hasMenuActiveChild } from "./utils";

const MenuItemComponent = forwardRef<IMenuItemRef | null, IMenuItemProps>(
  function MenuItem(props, ref) {
    const {
      toggle,
      trigger,
      dropdownProps,
      dropdownZIndex = 1300,
      disabled,
      tabIndex,
      className,
      handleParentHide,
      onShow,
      onHide,
      onClick,
      containerProps: ContainerPropsProp = {},
      children,
      open = false,
      parentId,
      id,
    } = props;

    const { ...containerProps } = ContainerPropsProp;

    const menuItemRef = useRef<HTMLDivElement | null>(null);

    const path = props.path || getMenuLinkPath(children);

    const {
      disabled: isMenuDisabled,
      highlight,
      multipleExpand,
      setOpenAccordion,
      isOpenAccordion,
      dropdownTimeout,
    } = useMenu();

    const finalParentId = parentId !== undefined ? parentId : "";

    const finalId = id !== undefined ? id : "";

    const menuContainerRef = useRef<HTMLDivElement | null>(null);

    const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const { pathname, prevPathname } = usePathname();

    const { match } = useMatchPath(path);

    const propToggle: TMenuToggle = useResponsiveProp(toggle, "accordion");

    const propTrigger: TMenuTrigger = useResponsiveProp(trigger, "click");

    const propDropdownProps = useResponsiveProp(dropdownProps);

    const active = highlight && path.length > 0 && match;

    const [show, setShow] = useState(open);

    const accordionShow = isOpenAccordion(finalParentId, finalId);

    const [here, setHere] = useState<boolean>(false);

    const [transitioning, setTransitioning] = useState(open);

    const [accordionEnter, setAccordionEnter] = useState(open);

    const isTopLevel = parentId === undefined || parentId === "root";

    const hasSub = Children.toArray(children).some(
      (child) => isValidElement(child) && child.type === MenuSub
    );

    // Handlers
    const handleShow = () => {
      if (hasSub) {
        setShow(true);
      }

      if (hasSub && propToggle === "accordion" && multipleExpand === false) {
        setOpenAccordion(finalParentId, finalId);
      }
    };

    const handleHide = () => {
      if (hasSub) {
        setShow(false);
      }

      if (hasSub && propToggle === "accordion" && multipleExpand === false) {
        setOpenAccordion(finalParentId, "");
      }

      if (handleParentHide) {
        handleParentHide();
      }
    };

    const handleToggle = (e: MouseEvent<HTMLElement>) => {
      if (isMenuDisabled) return;

      if (disabled) return;

      if (show) {
        if (propToggle === "accordion") {
          setAccordionEnter(true);
        }

        handleHide();
      } else {
        if (propToggle === "accordion") {
          setAccordionEnter(true);
        }

        handleShow();
      }

      if (onClick) {
        onClick(e, props);
      }
    };

    const handleClick = (e: MouseEvent<HTMLElement>) => {
      if (disabled) {
        return;
      }

      handleHide();

      if (onClick) {
        onClick(e, props);
      }
    };

    // Render helpers
    const renderHeading = (child: ReactElement) => cloneElement(child);

    const renderLink = (child: ReactElement) => {
      const modifiedProps: IMenuLinkProps = {
        hasItemSub: hasSub,
        tabIndex,
        open: show,
        handleToggle,
        handleClick,
      };
      return cloneElement(child, modifiedProps);
    };

    const renderToggle = (child: ReactElement) => {
      // Add some props to each child
      const modifiedProps: IMenuToggleProps = {
        hasItemSub: hasSub,
        tabIndex,
        handleToggle,
      };

      // Return the child with modified props
      return cloneElement(child, modifiedProps);
    };

    const renderSubDropdown = (child: ReactElement) => {
      const modifiedProps: IMenuSubProps = {
        parentId: `${parentId}-${finalId}`,
        toggle: propToggle,
        handleParentHide: handleHide,
        tabIndex,
        menuItemRef: ref,
      };
      const modofiedChild = cloneElement(child, modifiedProps);
      return (
        <Popper
          style={{
            zIndex: dropdownZIndex,
            pointerEvents: trigger === "click" ? "auto" : "none",
          }}
          {...propDropdownProps}
          anchorEl={show ? menuItemRef.current : null}
          open={show}
          autoFocus={false}
          
          className={clsx(
            child.props.rootClassName && child.props.rootClassName
          )}
        >
          <ClickAwayListener onClickAway={handleHide}>
            <div
              className={clsx(
                "menu-container",
                child.props.baseClassName && child.props.baseClassName
              )}
              ref={menuContainerRef}
              style={{ pointerEvents: "auto" }}
            >
              {modofiedChild}
            </div>
          </ClickAwayListener>
        </Popper>
      );
    };
    const renderSubAccordion = (child: ReactElement) => {
      const handleEntered = () => {
        setTransitioning(true);
      };

      const handleExited = () => {
        setTransitioning(false);
        setAccordionEnter(true);
      };

      // Add some props to each child
      const modifiedProps: IMenuSubProps = {
        parentId: `${parentId}-${finalId}`,
        tabIndex,
        show,
        enter: accordionEnter,
        toggle: propToggle,
        handleClick,
        handleEntered,
        handleExited,
      };

      return cloneElement(child, modifiedProps);
    };
    const renderContent = () => {
      const modifiedChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
          if (child.type === MenuLink) {
            return renderLink(child);
          } else if (child.type === MenuToggle) {
            return renderToggle(child);
          } else if (child.type === MenuHeading) {
            return renderHeading(child);
          } else if (child.type === MenuSub && propToggle === "dropdown") {
            return renderSubDropdown(child);
          } else if (child.type === MenuSub && propToggle === "accordion") {
            return renderSubAccordion(child);
          }
        }

        return child;
      });

      return modifiedChildren;
    };

    useImperativeHandle(
      ref,
      () => ({
        current: menuItemRef.current,
        show: () => {
          handleShow();
        },
        hide: () => {
          handleHide();
        },
        isOpen: () => {
          return show;
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
      [show]
    );

    useEffect(() => {
      if (show) {
        if (onShow) {
          onShow();
        }
      } else {
        if (onHide) {
          onHide();
        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);

    useEffect(() => {
      if (propToggle === "accordion" && multipleExpand === false) {
        setShow(accordionShow);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accordionShow]);

    useEffect(() => {
      if (highlight) {
        if (hasMenuActiveChild(pathname, children)) {
          if (propToggle === "accordion") {
            setShow(true);
          }

          if(isTopLevel) setHere(true);
        } else {
          if (propToggle === "accordion") {
            setShow(false);
          }

          setHere(false);
        }
      }

      if (prevPathname !== pathname && hasSub && propToggle === "dropdown") {
        handleHide();
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
      <div
        {...containerProps}
        ref={menuItemRef}
        tabIndex={tabIndex}
        className={clsx(
          "menu-item",
          propToggle === "dropdown" && "menu-item-dropdown",
          className && className,
          active && "active",
          here && "here"
        )}
      >
        {renderContent()}
      </div>
    );
  }
);

MenuItemComponent.displayName = "MenuItem";
const MenuItem = memo(MenuItemComponent);

export { MenuItem };
