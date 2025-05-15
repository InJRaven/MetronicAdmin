import {
  Tree,
  TreeNode,
  TreeLeaf,
  TreeChildNodes,
  TreeTitle,
  TTreeConfig,
  ITreeNodeConfig,
  KeenIcon,
  TreeIcon,
  TreeBullet,
} from "@/components/ui";
import { useMenus } from "@/hooks";
import clsx from "clsx";

const levelGap = [
  "gap-[1rem]",
  "gap-[1rem]",
  "gap-[0.5rem]",
  "gap-[0.5rem]",
  "gap-[0.5rem]",
  "gap-[0.5rem]",
];

const levelPaddingLeft = [
  "ps-[2.2rem]",
  "ps-[2.2rem]",
  "ps-[2.2rem]",
  "ps-[2.2rem]",
  "ps-[2.2rem]",
  "ps-[2.2rem]",
];

const levelBorderLeft = [
  "before:start-[2rem]",
  "before:start-[2rem]",
  "before:start-[2rem]",
  "before:start-[2rem]",
  "before:start-[2rem]",
];

const MenuTreeView = () => {
  const buildTreeView = (tree: TTreeConfig) => {
    return tree.map((node, index) => {
      if (!node.heading) {
        return buildTreeRoot(node, index);
      }
    });
  };

  const buildTreeRoot = (node: ITreeNodeConfig, index: number) => {
    if (node.children && node.children.length > 0) {
      return (
        <TreeNode
          key={index}
          {...(node.toggle && { toggle: node.toggle })}
          {...(node.trigger && { trigger: node.trigger })}
        >
          <TreeLeaf className={clsx(levelGap[0])}>
            {buildIconLeft()}
            <TreeTitle>{node.title}</TreeTitle>
          </TreeLeaf>
          <TreeChildNodes
            className={clsx(levelPaddingLeft[0], levelBorderLeft[0])}
          >
            {buildTreeChildNodeChildren(node.children, index, 1)}
          </TreeChildNodes>
        </TreeNode>
      );
    } else {
      return (
        <TreeNode
          key={index}
          {...(node.toggle && { toggle: node.toggle })}
          {...(node.trigger && { trigger: node.trigger })}
        >
          <TreeLeaf className={clsx(levelGap[0])}>
            {buildIconLeft()}

            <TreeTitle>{node.title}</TreeTitle>
          </TreeLeaf>
        </TreeNode>
      );
    }
  };

  const buildTreeChildNodeChildren = (
    nodes: TTreeConfig,
    _index: number,
    level: number = 0
  ) => {
    return nodes.map((node, index) => {
      return buildTreeChildNodes(node, index, level);
    });
  };

  const buildTreeChildNodes = (
    node: ITreeNodeConfig,
    index: number,
    level: number = 0
  ) => {
    if (node.children && node.children.length > 0) {
      return (
        <TreeNode
          key={index}
          {...(node.toggle && { toggle: node.toggle })}
          {...(node.trigger && { trigger: node.trigger })}
        >
          <TreeLeaf className={clsx(levelGap[level])}>
            {buildIconLeft()}
            <TreeTitle>{node.title}</TreeTitle>
          </TreeLeaf>
          <TreeChildNodes
            className={clsx(levelBorderLeft[level], levelPaddingLeft[level])}
          >
            {buildTreeChildNodeChildren(node.children, index, level + 1)}
          </TreeChildNodes>
        </TreeNode>
      );
    } else {
      return (
        <TreeNode
          key={index}
          {...(node.toggle && { toggle: node.toggle })}
          {...(node.trigger && { trigger: node.trigger })}
        >
          <TreeLeaf className={clsx(levelGap[level])}>
            <TreeBullet className="before:-translate-y-1/2" />
            <TreeTitle>{node.title}</TreeTitle>
          </TreeLeaf>
        </TreeNode>
      );
    }
  };

  const buildIconLeft = () => {
    return (
      <TreeIcon>
        <KeenIcon icon="folder" />
      </TreeIcon>
    );
  };

  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig("primary");

  return <Tree>{menuConfig && buildTreeView(menuConfig)}</Tree>;
};

export { MenuTreeView };
