import { IMenuArrowProps } from "./";
import clsx from "clsx";

const MenuArrow = ({ className, open }: IMenuArrowProps) => {
  return (
    <div
      className={clsx("menu-arrow transition-colors duration-200", className)}
    >
      <i className={clsx("ki-duotone", open ? "ki-minus" : "ki-plus")} />
    </div>
  );
};

export { MenuArrow };
