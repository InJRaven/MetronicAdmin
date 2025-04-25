import clsx from "clsx";
import { IMenuIconProps } from "./";

const MenuIcon = ({ className, children }: IMenuIconProps) => {
  return (
    <span className={clsx("menu-icon transition-colors duration-200", className && className)}>
      {children}
    </span>
  );
};
export { MenuIcon };
