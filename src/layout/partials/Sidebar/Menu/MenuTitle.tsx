import clsx from "clsx";
import { memo } from "react";

import { IMenuTitleProps } from "./";

const MenuTitleComponent = ({ className, children }: IMenuTitleProps) => {
  return (
    <span className={clsx("menu-title transition-colors duration-200", className && className)}>{children}</span>
  );
};

const MenuTitle = memo(MenuTitleComponent);
export { MenuTitle };
