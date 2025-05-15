import clsx from "clsx";
import { ITreeIconProps } from "./";

const TreeIcon = ({ children, className, open }: ITreeIconProps) => {
  return (
    <div className={clsx("tree-icon", open && open, className)}>{children}</div>
  );
};
export { TreeIcon };
