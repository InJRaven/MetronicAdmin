import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  memo,
  useContext,
  useState,
} from "react";
import { ITreeContextProps, ITreeNodeProps, ITreeProps, TreeNode } from "./";
import clsx from "clsx";

const initalProps: ITreeContextProps = {
  disabled: false,
  multipleExpand: false,
  dropdownTimeout: 0,
  setOpenTreeNode: (parentId: string, id: string) => {
    console.log(`Tree at level ${parentId}, with ID ${id} is now open`);
  },

  isOpenTreeNode: (parentId: string, id: string) => {
    console.log(`Checking if Tree at level ${parentId}, with ID ${id} is open`);
    return false;
  },
};
const TreeContext = createContext(initalProps);
const useTree = () => useContext(TreeContext);

const TreeComponent = ({
  className,
  children,
  disabled = false,
  dropdownTimeout = 150,
  multipleExpand = false,
}: ITreeProps) => {
  const [openNode, setOpenNode] = useState<{ [key: string]: string | null }>(
    {}
  );

  const setOpenTreeNode = (parentId: string, id: string) => {
    setOpenNode((prevState) => ({
      ...prevState,
      [parentId]: prevState[parentId] === id ? null : id,
    }));
  };
  const isOpenTreeNode = (parentId: string, id: string) => {
    return openNode[parentId] === id;
  };
  const modifiedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      if (child.type === TreeNode) {
        const modifiedProps: Partial<ITreeNodeProps> = {
          parentId: "node",
          id: `node-${index}`,
        };
        return cloneElement(child, modifiedProps);
      } else {
        return cloneElement(child);
      }
    }
    return child;
  });
  return (
    <TreeContext.Provider
      value={{
        disabled,
        dropdownTimeout,
        multipleExpand,
        setOpenTreeNode,
        isOpenTreeNode,
      }}
    >
      <div className={clsx("tree", className)}>{modifiedChildren}</div>
    </TreeContext.Provider>
  );
};

TreeComponent.displayName = "Tree";
const Tree = memo(TreeComponent);
// eslint-disable-next-line react-refresh/only-export-components
export { Tree, useTree };
