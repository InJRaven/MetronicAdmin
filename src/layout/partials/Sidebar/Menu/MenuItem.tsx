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
  useMenu,
} from "./";
import { MenuSub } from "./";


const MenuItemComponent = ({
  id,
  parentId,
  tabIndex,
  children,
  onClick,
  open = false,
  className,
}: IMenuItemProps) => {
  const { setOpenAccordion, isOpenAccordion, multipleExpand } = useMenu();
  const finalParentId = parentId !== undefined ? parentId : "";
  const finalId = id !== undefined ? id : "";

  const [show, setShow] = useState(open);
  const accordionShow = isOpenAccordion?.(finalParentId, finalId) ?? false;

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
    console.log("handleToggle");
    if (show) {
      handleHide();
    } else {
      handleShow();
    }

    if (onClick) {
      onClick(e, {});
    }
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    console.log("handleClick");

    handleHide();

    if (onClick) {
      onClick(e, {});
    }
  };

  useEffect(() => {
    console.log("Show state changed:", accordionShow);
    setShow(accordionShow);
  }, [accordionShow]);

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
    <div tabIndex={tabIndex} className={clsx("menu-item", className)}>
      {renderContent()}
    </div>
  );
};
const MenuItem = memo(MenuItemComponent);

export { MenuItem };
