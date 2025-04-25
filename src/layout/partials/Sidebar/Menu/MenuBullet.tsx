import clsx from "clsx";
import { IMenuBulletProps } from "./";

const MenuBullet = ({ children, className }: IMenuBulletProps) => {
  return <div className={clsx("menu-bullet", className)}>{children}</div>;
};

export { MenuBullet };
