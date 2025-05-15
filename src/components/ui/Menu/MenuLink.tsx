import clsx from "clsx";
import { IMenuArrowProps, IMenuLinkProps, MenuArrow } from "./";
import { NavLink } from "react-router-dom";
import { Children, cloneElement, isValidElement, memo } from "react";
const MenuLinkComponent = ({
  path,
  newTab,
  hasItemSub = false,
  externalLink,
  className,
  open,
  handleClick,
  handleToggle,
  children,
}: IMenuLinkProps) => {
  const modifiedChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === MenuArrow) {
      const modifiedProps: IMenuArrowProps = {
        open: open,
      };
      return cloneElement(child, modifiedProps);
    }
    return child;
  });

  if (!hasItemSub && path) {
    if (externalLink) {
      const target = newTab ? "_blank" : "_self";
      return (
        <a
          href={path}
          target={target}
          rel="noopener noreferrer"
          onClick={handleClick}
          className={clsx("menu-link", className && className)}
        />
      );
    } else {
      return (
        <NavLink
          end
          to={path}
          onClick={handleClick}
          className={clsx("menu-link", className && className)}
        >
          {modifiedChildren}
        </NavLink>
      );
    }
  } else {
    if (hasItemSub) {
      return (
        <div
          className={clsx("menu-link", className && className)}
          onClick={handleToggle}
        >
          {modifiedChildren}
        </div>
      );
    } else {
      return (
        <div
          className={clsx("menu-link", className && className)}
          onClick={handleClick}
        >
          {modifiedChildren}
        </div>
      );
    }
  }
};

MenuLinkComponent.displayName = "MenuLink";

const MenuLink = memo(MenuLinkComponent);
export { MenuLink };
