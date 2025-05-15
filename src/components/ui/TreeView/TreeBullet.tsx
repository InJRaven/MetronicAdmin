import clsx from "clsx";
import { ITreeBulletProps } from "./";

const TreeBullet = ({ children, className }: ITreeBulletProps) => {
  return <div className={clsx("tree-bullet", className)}>{children}</div>;
};

export { TreeBullet };
