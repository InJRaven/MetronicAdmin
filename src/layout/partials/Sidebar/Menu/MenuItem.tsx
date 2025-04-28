import clsx from "clsx";
import {
  Children,
  cloneElement,
  isValidElement,
  memo,
  MouseEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";
import {
  IMenuItemProps,
  IMenuLinkProps,
  IMenuSubProps,
  MenuHeading,
  MenuLink,
  MenuSub,
  useMenu,
} from "./";
import { useMatchPath, usePathname } from "@/hooks";
import { getMenuLinkPath, hasMenuActiveChild } from "./utils";

const MenuItemComponent = ({
  id,
  parentId,
  tabIndex,
  children,
  onClick,
  open = false,
  className,
}: IMenuItemProps) => {
  const { highlight, setOpenAccordion, isOpenAccordion, multipleExpand } =
    useMenu();

  const { pathname, prevPathname } = usePathname();
  const path = getMenuLinkPath(children);
  const { match } = useMatchPath(path);

  const [show, setShow] = useState(open);

  const active = highlight && path.length > 0 && match;

  const [here, setHere] = useState(open);

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

  // Effects
  useEffect(() => {
    if (!multipleExpand && accordionShow !== undefined) {
      setShow(accordionShow);
    }
  }, [accordionShow, multipleExpand]);

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
  }, [pathname, children, prevPathname]);

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

  return (
    <div
      tabIndex={tabIndex}
      className={clsx("menu-item", here && "here", className)}
    >
      {renderContent()}
    </div>
  );
};

MenuItemComponent.displayName = "MenuItem";
const MenuItem = memo(MenuItemComponent);

export { MenuItem };
