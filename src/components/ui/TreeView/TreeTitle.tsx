import clsx from "clsx";
import { ITreeTitleProps } from "./";

const TreeTitle = ({ className, children }: ITreeTitleProps) => {
  return <span className={clsx("tree-title", className)}>{children}</span>;
};

export { TreeTitle };
