import clsx from "clsx";
import { IMenuIconProps } from "./";

const MenuIcon = ({ className, children }: IMenuIconProps) => {
  return (
    <span className={clsx("menu-icon", className && className)}>
      {children}
    </span>
  );
};
export { MenuIcon };
