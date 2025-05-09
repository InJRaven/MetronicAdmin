import { useMenus } from "@/hooks/useMenus";
import {
  IMenuItemConfig,
  Menu,
  MenuArrow,
  MenuBullet,
  MenuHeading,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuTitle,
  TMenuConfig,
} from "@ui";
import { MenuSub, KeenIcon } from "@ui";

import clsx from "clsx";

const levelGap = [
  "gap-[1rem]",
  "gap-[1.4rem]",
  "gap-[0.5rem]",
  "gap-[0.5rem]",
  "gap-[0.5rem]",
  "gap-[0.5rem]",
];

const levelPaddingLeft = [
  "ps-[1rem]",
  "ps-[2.2rem]",
  "ps-[2.2rem]",
  "ps-[2.2rem]",
  "ps-[2.2rem]",
  "ps-[2.2rem]",
];

const levelBorderLeft = [
  "before:start-[2rem]",
  "before:start-[3.2rem]",
  "before:start-[3.2rem]",
  "before:start-[3.2rem]",
  "before:start-[3.2rem]",
];

const SideBarMenu = () => {
  const buildMenu = (menu: TMenuConfig) => {
    return menu.map((item, index) => {
      if (item.heading) {
        return buildMenuHeading(item, index);
      } else {
        return buildMenuRoot(item, index);
      }
    });
  };

  const buildMenuRoot = (item: IMenuItemConfig, index: number) => {
    if (item.children && item.children.length > 0) {
      return (
        <MenuItem
          key={index}
          {...(item.toggle && { toggle: item.toggle })}
          {...(item.trigger && { trigger: item.trigger })}
        >
          <MenuLink className={clsx(levelGap[0])}>
            {item.icon && (
              <MenuIcon>
                <KeenIcon icon={item.icon} style="outline" />
              </MenuIcon>
            )}
            <MenuTitle>{item.title}</MenuTitle>
            <MenuArrow />
          </MenuLink>
          <MenuSub className={clsx(levelPaddingLeft[0], levelBorderLeft[0])}>
            {buildMenuItemChildren(item.children, index, 1)}
          </MenuSub>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={index}>
          <MenuLink path={item.path} className={clsx(levelGap[0])}>
            {item.icon && (
              <MenuIcon>
                <KeenIcon icon={item.icon} style="outline" />
              </MenuIcon>
            )}
            <MenuTitle>{item.title}</MenuTitle>
          </MenuLink>
        </MenuItem>
      );
    }
  };
  const buildMenuHeading = (item: IMenuItemConfig, index: number) => {
    return (
      <MenuItem key={index} className="pt-[1rem] pb-px">
        <MenuHeading>{item.heading}</MenuHeading>
      </MenuItem>
    );
  };
  const buildMenuItemChildren = (
    items: TMenuConfig,
    _index: number,
    level: number = 0
  ) => {
    return items.map((item, index) => {
      return buildMenuItemChild(item, index, level);
    });
  };
  const buildMenuItemChild = (
    item: IMenuItemConfig,
    index: number,
    level: number = 0
  ) => {
    if (item.children && item.children.length >0) {
      return (
        <MenuItem
          key={index}
          {...(item.toggle && { toggle: item.toggle })}
          {...(item.trigger && { trigger: item.trigger })}
        >
          <MenuLink className={clsx(levelGap[level])}>
            <MenuBullet className="before:-translate-y-1/2" />

            <MenuTitle>{item.title}</MenuTitle>
            <MenuArrow />
          </MenuLink>
          <MenuSub
            className={clsx(levelBorderLeft[level], levelPaddingLeft[level])}
          >
            {buildMenuItemChildren(item.children, index, level + 1)}
          </MenuSub>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={index}>
          <MenuLink path={item.path} className={clsx(levelGap[level])}>
            <MenuBullet className="before:-translate-y-1/2" />
            <MenuTitle>{item.title}</MenuTitle>
          </MenuLink>
        </MenuItem>
      );
    }
  };

  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig("primary");

  return <Menu highlight={true}>{menuConfig && buildMenu(menuConfig)}</Menu>;
};

export { SideBarMenu };
