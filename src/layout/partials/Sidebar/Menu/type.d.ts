import { HTMLAttributes, ReactNode, RefAttributes } from "react";
export type TMenuShow = boolean;
export type TMenuTabIndex = number;

export type TMenuClickEvent = (
  e: MouseEvent<HTMLElement>,
  props: unknown
) => void;

export type TMenuShow = boolean;

export type TMenuTrigger = "click" | "hover";

export type TMenuItemTrigger = Record<string, TMenuToggle> | TMenuTrigger;

export type TMenuToggle = "accordion" | "dropdown";

export type TMenuItemToggle = Record<string, TMenuToggle> | TMenuToggle;

export type TMenuDropdown = Partial<Omit<PopperProps, "children">>;

export interface IMenuProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  highlight?: boolean;
  multipleExpand?: boolean;
}
export interface IMenuContextProps {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  highlight?: boolean;
  multipleExpand?: boolean;
  isOpenAccordion?: (parentId: string, id: string) => boolean;
  setOpenAccordion?: (parentId: string, id: string) => void;
}

export interface IMenuItemProps {
  path?: string;
  id?: string;
  open?: boolean;
  parentId?: string;
  toggle?: TMenuItemToggle;
  trigger?: TMenuItemTrigger;
  disabled?: boolean;
  dropdownProps?: TMenuDropdown;
  dropdownZIndex?: number;
  className?: string;
  closeParentMenu?: CallableFunction;
  onClick?: TMenuClickEvent;
  onShow?: CallableFunction;
  onHide?: CallableFunction;
  handleParentHide?: CallableFunction;
  handleClick?: TMenuEventHandler;
  tabIndex?: TMenuTabIndex;
  itemRef?: unknown;
  containerProps?: HTMLAttributes<HTMLElement> &
    RefAttributes<HTMLElement | null>;
  containerRef?: RefObject<HTMLDivElement>;
  children: ReactNode;

  
}

export interface IMenuItemConfig {
  id?: string;
  title?: string;
  disabled?: boolean;
  heading?: string;
  icon?: string;
  path?: string;
  children?: IMenuItemConfig[];
  childrenIndex?: number;
}

export interface IMenuItemRef {
  show: () => void;
  hide: () => void;
  isOpen: () => boolean;
}
export interface IMenuHeadingProps {
  className?: string;
  children: ReactNode;
}
export interface IMenuLinkProps {
  path?: string;
  externalLink?: boolean;
  newTab?: boolean;
  hasItemSub?: boolean;
  className?: string;
  tabIndex?: TMenuTabIndex;
  open?: boolean;
  handleClick?: TMenuEventHandler;
  handleToggle?: TMenuEventHandler;
  children?: ReactNode;
}

export interface IMenuIconProps {
  className?: string;
  children: ReactNode;
}

export interface IMenuTitleProps {
  className?: string;
  children?: ReactNode;
}
export interface IMenuSubProps {
  ref?: unknown;
  parentId?: string;
  tabIndex?: TMenuTabIndex;
  className?: string;
  disableAnimation?: boolean;
  open?: boolean;
  children?: ReactNode;
}
export type TMenuConfig = IMenuItemConfig[];

export interface IMenuBulletProps {
  className?: string;
  children?: ReactNode;
}

export interface IMenuArrowProps {
  className?: string;
  open?: boolean;
}
