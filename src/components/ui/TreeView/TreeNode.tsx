import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  MouseEvent,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useResponsiveProp } from "@/hooks";
import {
  ITreeChildProps,
  ITreeLeafProps,
  ITreeNodeProps,
  ITreeNodeRef,
  TreeChildNodes,
  TreeLeaf,
  TTreeToggle,
  TTreeTrigger,
  useTree,
} from "./";
import clsx from "clsx";

const TreeNodeComponent = forwardRef<ITreeNodeRef | null, ITreeNodeProps>(
  function TreeNode(props, ref) {
    const {
      toggle,
      trigger,
      dropdownProps,
      dropdownZIndex = 1300,
      disabled,
      tabIndex,
      className,
      handleParentHide,
      onShow,
      onHide,
      onClick,
      containerProps: ContainerPropsProp = {},
      children,
      open = false,
      parentId,
      id,
    } = props;

    const { ...containerProps } = ContainerPropsProp;

    const treeNodeRef = useRef<HTMLDivElement | null>(null);

    const {
      disabled: isTreeNodeDisabled,
      dropdownTimeout,
      multipleExpand,
      setOpenTreeNode,
      isOpenTreeNode,
    } = useTree();

    const finalParentId = parentId !== undefined ? parentId : "";

    const finalId = id !== undefined ? id : "";

    const treeContainerRef = useRef<HTMLDivElement | null>(null);

    const propToggle: TTreeToggle = useResponsiveProp(toggle, "accordion");

    const propTrigger: TTreeTrigger = useResponsiveProp(trigger, "click");

    const propDropdownProps = useResponsiveProp(dropdownProps);

    const [show, setShow] = useState(open);

    const treeNodeShow = isOpenTreeNode(finalParentId, finalId);

    const [transitioning, setTransitioning] = useState(open);

    const [treeNodeEnter, setTreeNodeEnter] = useState(open);

    const hasChild = Children.toArray(children).some(
      (child) => isValidElement(child) && child.type === TreeChildNodes
    );

    const handleShow = () => {
      if (hasChild) {
        setShow(true);
      }

      if (hasChild && propToggle === "accordion" && multipleExpand === false) {
        setOpenTreeNode(finalParentId, finalId);
      }
    };

    const handleHide = () => {
      if (hasChild) {
        setShow(false);
      }

      if (hasChild && propToggle === "accordion" && multipleExpand === false) {
        setOpenTreeNode(finalParentId, "");
      }

      if (handleParentHide) {
        handleParentHide();
      }
    };

    const handleToggle = (e: MouseEvent<HTMLElement>) => {
      if (isTreeNodeDisabled) return;

      if (disabled) return;

      if (show) {
        if (propToggle === "accordion") {
          setTreeNodeEnter(true);
        }
        handleHide();
      } else {
        if (propToggle === "accordion") {
          setTreeNodeEnter(true);
        }

        handleShow();
      }

      if (onClick) {
        onClick(e, props);
      }
    };

    const handleClick = (e: MouseEvent<HTMLElement>) => {
      if (disabled) {
        return;
      }
      handleHide();

      if (onClick) {
        onClick(e, props);
      }
    };

    const renderTreeLeaf = (child: ReactElement) => {
      const modifiedProps: ITreeLeafProps = {
        hasChildren: hasChild,
        tabIndex,
        open: show,
        handleToggle: handleToggle,
        handleClick: handleClick,
      };
      return cloneElement(child, modifiedProps);
    };

    const renderTreeChildNodes = (child: ReactElement) => {
      const handleEntered = () => {
        setTransitioning(true);
      };

      const handleExited = () => {
        setTransitioning(false);
        setTreeNodeEnter(true);
      };

      const modifiedProps: ITreeChildProps = {
        parentId: `${parentId}-${finalId}`,
        tabIndex,
        show: show,
        enter: treeNodeEnter,
        toggle: propToggle,
        handleClick: handleClick,
        handleEntered: handleEntered,
        handleExited: handleExited,
      };

      return cloneElement(child, modifiedProps);
    };

    const renderContent = () => {
      const modifiedChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
          if (child.type === TreeLeaf) {
            return renderTreeLeaf(child);
          } else if (
            child.type === TreeChildNodes &&
            propToggle === "accordion"
          ) {
            return renderTreeChildNodes(child);
          }
        }
        return child;
      });
      return modifiedChildren;
    };

    useImperativeHandle(
      ref,
      () => ({
        current: treeNodeRef.current,
        show: () => {
          handleShow();
        },
        hide: () => {
          handleHide();
        },
        isOpen: () => {
          return show;
        },
      }),
      [show]
    );

    useEffect(() => {
      if (show) {
        if (onShow) {
          onShow();
        }
      } else {
        if (onHide) {
          onHide();
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);

    useEffect(() => {
      if (propToggle === "accordion" && multipleExpand === false) {
        setShow(treeNodeShow);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [treeNodeShow]);
    return (
      <div
        {...containerProps}
        ref={treeNodeRef}
        tabIndex={tabIndex}
        className={clsx("tree-node", className && className)}
      >
        {renderContent()}
      </div>
    );
  }
);

TreeNodeComponent.displayName = "TreeNode";
const TreeNode = memo(TreeNodeComponent);
export { TreeNode };
