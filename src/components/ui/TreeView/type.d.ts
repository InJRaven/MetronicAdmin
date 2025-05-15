import { HTMLAttributes, ReactNode, RefAttributes } from "react";

export type TTreeShow = boolean;

export type TTreeTabIndex = number;

export type TTreeToggle = "accordion" | "dropdown";

export type TTreeTrigger = "click" | "hover";

export type TTreeNodeToggle = Record<string, TTreeToggle> | TTreeToggle;

export type TTreeNodeTriggle = Record<string, TTreeToggle> | TTreeTrigger;

export type TTreeDropdown = Partial<Omit<PopperProps, "children">>;

export interface ITreeProps {
  disabled?: boolean;
  multipleExpand?: boolean;
  className?: string;
  children?: ReactNode;
  dropdownTimeout?: number;
}
export interface ITreeContextProps {
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  multipleExpand?: boolean;
  dropdownTimeout?: number;
  setOpenTreeNode: (parentId: string, id: string) => void;
  isOpenTreeNode: (parentId: string, id: string) => boolean;
}

export interface ITreeNodeProps {
  id?: string;
  parentId?: string;
  disabled?: boolean;
  open?: boolean;
  dropdownProps?: TTreeDropdown;
  dropdownZIndex?: number;
  className?: string;
  toggle?: TTreeNodeToggle;
  trigger?: TTreeNodeTriggle;
  onShow?: CallableFunction;
  onClick?: TTreeClickEvent;
  onShow?: CallableFunction;
  onHide?: CallableFunction;
  handleParentHide?: CallableFunction;
  handleClick?: TTreeEventHandler;
  tabIndex?: TTreeTabIndex;
  itemRef?: unknown;
  containerProps?: HTMLAttributes<HTMLElement> &
    RefAttributes<HTMLElement | null>;
  children: ReactNode;
}

export interface ITreeNodeRef {
  show: () => void;
  hide: () => void;
  isOpen: () => boolean;
}

export interface ITreeNodeConfig {
  heading?: string;
  title?: string;
  disabled?: boolean;
  toggle?: TTreeNodeToggle;
  trigger?: TTreeNodeTriggle;
  dropdownProps?: TTreeDropdown;
  children?: ITreeNodeConfig[];
  childrenIndex?: number;
}
export interface ITreeLeafProps {
  hasChildren?: boolean;
  className?: string;
  tabIndex?: TTreeTabIndex;
  open?: boolean;
  handleClick?: TTreeEventHandler;
  handleToggle?: TTreeEventHandler;
  children?: ReactNode;
}

export interface ITreeTitleProps {
  className?: string;
  children: ReactNode;
}

export interface ITreeChildProps {
  parentId?: string;
  show?: TTreeShow;
  enter?: boolean;
  toggle?: TTreeToggle;
  ref?: unknown;
  menuItemRef?: unknown;
  tabIndex?: number;
  className?: string;
  rootClassName?: string;
  baseClassName?: string;
  onClick?: TTreeClickEvent;
  handleParentHide?: CallableFunction;
  handleClick?: TTreeEventHandler;
  handleEntered?: () => void;
  handleExited?: () => void;
  accordionIn?: boolean;
  children?: ReactNode;
}

export interface ITreeIconProps {
  className?: string;
  children: ReactNode;
}

export interface ITreeChildrenProps {
  parentId?: string;
  show?: TTreeShow;
  enter?: boolean;
  toggle?: TTreeNodeToggle;
  ref?: unknown;
}

export type TTreeConfig = ITreeNodeConfig[];

export interface ITreeIconProps {
  open?: boolean;
  children?: ReactNode;
  className?: string;
}

export interface ITreeBulletProps {
  children?: ReactNode;
  className?: string;
}
