import clsx from "clsx";
import { ClickAwayListener, Popper } from "@mui/base";
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
  MenuHeading,
  MenuLink,
  MenuSub,
  useMenu,
} from "./";
import { useMatchPath, usePathname } from "@/hooks";
import { getMenuLinkPath, hasMenuActiveChild } from "./utils";

const MenuItemComponent = forwardRef<IMenuItemRef | null, IMenuItemProps>(
  function MenuItem(props, ref) {
    const {
      id,
      parentId,
      tabIndex,
      children,
      onClick,
      open = false,
      className,
    } = props;

    const { highlight, setOpenAccordion, isOpenAccordion, multipleExpand } =
      useMenu();

    const menuItemRef = useRef<HTMLDivElement | null>(null);

    const actionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const { pathname, prevPathname } = usePathname();

    const path = getMenuLinkPath(children);

    const { match } = useMatchPath(path);

    // const active = highlight && path.length > 0 && match;

    const [show, setShow] = useState(open);

    const [here, setHere] = useState<boolean>(false);

    const [isMenuSubMounted, setIsMenuSubMounted] = useState<boolean>(true);

    const isTopLevel = parentId === undefined || parentId === "root";

    const finalParentId = parentId ?? "";

    const finalId = id ?? "";

    const accordionShow = isOpenAccordion?.(finalParentId, finalId) ?? false;

    const hasSub = Children.toArray(children).some(
      (child) => isValidElement(child) && child.type === MenuSub
    );

    // Handlers
    const handleShow = () => {
      setShow(true);
      if (!multipleExpand) setOpenAccordion?.(finalParentId, finalId);
    };

    const handleHide = () => {
      setShow(false);
      if (!multipleExpand) setOpenAccordion?.(finalParentId, "");
    };

    const handleToggle = (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      if (show) {
        handleHide();
      } else {
        handleShow();
      }
      onClick?.(e, {});
    };

    const handleClick = (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      handleHide();
      onClick?.(e, {});
    };

    // Render helpers
    const renderHeadingComponent = (child: ReactElement) => cloneElement(child);

    const renderLinkComponent = (child: ReactElement) => {
      const modifiedProps: IMenuLinkProps = {
        hasItemSub: hasSub,
        tabIndex,
        open: show,
        handleToggle,
        handleClick,
      };
      return cloneElement(child, modifiedProps);
    };

    const renderSubMenu = (child: ReactElement) => {
      const modifiedProps: IMenuSubProps = {
        parentId: `${parentId}-${finalId}`,
        tabIndex,
        disableAnimation: isMenuSubMounted,
        open: show,
      };
      return cloneElement(child, modifiedProps);
    };

    const renderContent = () =>
      Children.map(children, (child) => {
        if (!isValidElement(child)) return child;

        switch (child.type) {
          case MenuLink:
            return renderLinkComponent(child);
          case MenuHeading:
            return renderHeadingComponent(child);
          case MenuSub:
            return renderSubMenu(child);
          default:
            return child;
        }
      });

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
      [show]
    );
    // Effects
    useEffect(() => {
      if (multipleExpand === false) {
        setShow(accordionShow);
      }
    }, [accordionShow, multipleExpand]);

    useEffect(() => {
      actionTimeoutRef.current = setTimeout(() => {
        setIsMenuSubMounted(false);
        console.log("test");
      }, 5000);
    }, []);
    useEffect(() => {
      if (highlight) {
        if (hasMenuActiveChild(pathname, children)) {
          setShow(true);
          if (isTopLevel) setHere(true);
        } else {
          setShow(false);
          setHere(false);
        }
      }

      if (prevPathname !== pathname && hasSub) {
        if (!hasMenuActiveChild(pathname, children)) {
          handleHide();
        }
      }
    }, [pathname, prevPathname]);

    useEffect(() => {
      return () => {
        if (actionTimeoutRef.current) {
          clearTimeout(actionTimeoutRef.current);
        }
      };
    }, []);
    return (
      <div
        ref={menuItemRef}
        tabIndex={tabIndex}
        className={clsx("menu-item", here && "here", className)}
      >
        {renderContent()}
      </div>
    );
  }
);

MenuItemComponent.displayName = "MenuItem";
const MenuItem = memo(MenuItemComponent);

export { MenuItem };
