import clsx from "clsx";
import { memo } from "react";

import { IMenuTitleProps } from "./";

const MenuTitleComponent = ({ className, children }: IMenuTitleProps) => {
  return (
    <span
      className={clsx(
        "menu-title",
        className && className
      )}
    >
      {children}
    </span>
  );
};

MenuTitleComponent.displayName = "MenuTitle";
const MenuTitle = memo(MenuTitleComponent);
export { MenuTitle };
