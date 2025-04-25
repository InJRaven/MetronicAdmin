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

  const active: boolean = highlight ? path.length > 0 && match : false;
  
  const isTopLevel = parentId === undefined || parentId === "root";

  const finalParentId = parentId !== undefined ? parentId : "";

  const finalId = id !== undefined ? id : "";

  const accordionShow = isOpenAccordion(finalParentId, finalId);

 
  const hasSub = Children.toArray(children).some(
    (child) => isValidElement(child) && child.type === MenuSub
  );

  const handleShow = () => {
    if (hasSub) {
      setShow(true);
    }
    if (hasSub && multipleExpand === false) {
      setOpenAccordion?.(finalParentId, finalId);
    }
  };

  const handleHide = () => {
    if (hasSub) {
      setShow(false);
    }
    if (hasSub && multipleExpand === false) {
      setOpenAccordion?.(finalParentId, "");
    }
  };

  const handleToggle = (e: MouseEvent<HTMLElement>) => {
    if (accordionShow) {
      handleHide();
    } else {
      handleShow();
    }

    if (onClick) {
      onClick(e, {});
    }
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    handleHide();

    if (onClick) {
      onClick(e, {});
    }
  };

  useEffect(() => {
    if (multipleExpand === false) {
      setShow(accordionShow);
    } else {
      setShow(open);
    }
    return () => {
      console.log("Cleanup: Resetting show state");
      setShow(false); // Reset state khi component unmount
    };
  }, [accordionShow, open, multipleExpand]);

  useEffect(() => {
    if (hasMenuActiveChild(pathname, children)) {
      handleShow();
    }
    return () => {
      console.log("Cleanup: Resetting submenu state on unmount");
    };
  }, [pathname, children]);

  const renderHeadingComponent = (child: ReactElement) => {
    return cloneElement(child);
  };
  const renderLinkComponent = (child: ReactElement) => {
    const modifiedProps: IMenuLinkProps = {
      hasItemSub: hasSub,
      tabIndex,
      handleToggle,
      handleClick,
    };
    return cloneElement(child, modifiedProps);
  };

  const renderSubMenu = (child: ReactElement) => {
    const modifiedProps: IMenuSubProps = {
      parentId: `${parentId}-${finalId}`,
      tabIndex,
      open: accordionShow,
    };
    return cloneElement(child, modifiedProps);
  };
  const renderContent = () => {
    const modifiedChildren = Children.map(children, (child) => {
      if (isValidElement(child)) {
        if (child.type === MenuLink) {
          return renderLinkComponent(child);
        } else if (child.type === MenuHeading) {
          return renderHeadingComponent(child);
        } else if (child.type === MenuSub) {
          return renderSubMenu(child);
        }
      }
      return child;
    });
    return modifiedChildren;
  };
  return (
    <div
      tabIndex={tabIndex}
      className={clsx("menu-item", active && "active", (isTopLevel && active)  && 'highlight', className)}
    >
      {renderContent()}
    </div>
  );
};
const MenuItem = memo(MenuItemComponent);

export { MenuItem };
