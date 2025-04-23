import clsx from "clsx";
import { IMenuLinkProps } from "./";
import { NavLink } from "react-router-dom";
const MenuLink = ({
  path,
  newTab,
  hasItemSub = false,
  externalLink,
  className,
  handleClick,
  handleToggle,
  children,
}: IMenuLinkProps) => {
  if (!hasItemSub && path) {
    if (externalLink) {
      const target = newTab ? "_blank" : "_self";
      return (
        <a
          href={path}
          target={target}
          rel="noopener"
          onClick={handleClick}
          className={clsx("menu-link", className && className)}
        />
      );
    } else {
      return (
        <NavLink
          to={path}
          onClick={handleClick}
          className={clsx("menu-link", className && className)}
        >
          {children}
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
          {children}
        </div>
      );
    } else {
      return (
        <div
          className={clsx("menu-link", className && className)}
          onClick={handleClick}
        >
          {children}
        </div>
      );
    }
  }
};

export { MenuLink };
