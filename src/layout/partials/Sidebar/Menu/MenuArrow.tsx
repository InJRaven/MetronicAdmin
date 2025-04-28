import { IMenuArrowProps } from "./";
import clsx from "clsx";

const MenuArrow = ({ className, open }: IMenuArrowProps) => {
  return (
    <div className={clsx("menu-arrow", className)}>
      <i className={clsx("ki-duotone", open ? "ki-minus" : "ki-plus")} />
    </div>
  );
};

export { MenuArrow };
