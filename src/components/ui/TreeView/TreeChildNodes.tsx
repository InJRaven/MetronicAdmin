import { Collapse } from "@mui/material";
import clsx from "clsx";
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
} from "react";

import { ITreeNodeProps, ITreeChildProps, TreeNode } from "./";

const TreeChildPropsComponent = forwardRef<
  HTMLDivElement | null,
  ITreeChildProps
>(
  (
    {
      show,
      enter,
      toggle = "accordion",
      className,
      handleParentHide,
      handleEntered,
      handleExited,
      children,
      parentId,
    },
    ref
  ) => {
    const finalParentId = parentId !== undefined ? parentId : "";

    const modifiedChildren = Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        if (child.type === TreeNode) {
          const modifiedProps: Partial<ITreeNodeProps> = {
            handleParentHide,
            parentId: finalParentId,
            id: `${finalParentId}-${index}`,
          };
          return cloneElement(child, modifiedProps);
        } else {
          return cloneElement(child);
        }
      }
      return child;
    });

    const renderContent = () => {
      if (toggle == "accordion") {
        return (
          <Collapse
            in={show}
            onEntered={handleEntered}
            onExited={handleExited}
            timeout="auto"
            enter={enter}
          >
            {modifiedChildren}
          </Collapse>
        );
      } else {
        return modifiedChildren;
      }
    };
    return (
      <div
        ref={ref}
        className={clsx(
          toggle === "accordion" && "tree-child-accordion",
          className && className
        )}
      >
        {renderContent()}
      </div>
    );
  }
);

const TreeChildNodes = memo(TreeChildPropsComponent);

export { TreeChildNodes };
