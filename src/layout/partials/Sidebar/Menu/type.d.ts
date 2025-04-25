import { ReactNode } from "react";
export type TMenuShow = boolean;
export type TMenuTabIndex = number;

export type TMenuClickEvent = (
  e: MouseEvent<HTMLElement>,
  props: unknown
) => void;
export type TMenuItemToggle = Record<string, TMenuToggle> | TMenuToggle;
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
  className?: string;
  id?: string;
  parentId?: string;
  open?: boolean;
  handleClick?: () => void;
  tabIndex?: TMenuTabIndex;
  onClick?: TMenuClickEvent;
  disabled?: boolean;
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
  parentId?: string;
  tabIndex?: TMenuTabIndex;
  className?: string;
  open?: boolean;
  children?: ReactNode;
}
export type TMenuConfig = IMenuItemConfig[];

export interface IMenuBulletProps {
  className?: string;
  children?: ReactNode;
}
