import clsx from "clsx";
import { Children, cloneElement, isValidElement, memo } from "react";
import { ITreeIconProps, ITreeLeafProps, TreeIcon } from "./";
const TreeLeafComponent = ({
  hasChildren = false,
  className,
  handleClick,
  open,
  handleToggle,
  children,
}: ITreeLeafProps) => {
  const modifiedChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === TreeIcon) {
      const modifiedProps: ITreeIconProps = {
        open: open,
      };
      return cloneElement(child, modifiedProps);
    }
    return child;
  });

  if (hasChildren) {
    return (
      <div className={clsx("tree-leaf", className)} onClick={handleToggle}>
        {modifiedChildren}
      </div>
    );
  } else {
    return (
      <div className={clsx("tree-leaf", className)} onClick={handleClick}>
        {modifiedChildren}
      </div>
    );
  }
};

TreeLeafComponent.displayName = "TreeLeaf";
const TreeLeaf = memo(TreeLeafComponent);

export { TreeLeaf };
