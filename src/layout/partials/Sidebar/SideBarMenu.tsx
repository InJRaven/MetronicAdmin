import { KeenIcons } from "@/components/ui";
import {
  IMenuItemConfig,
  Menu,
  MenuHeading,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuTitle,
  TMenuConfig,
} from "./Menu";
import { MenuSub } from "@/layout/partials/Sidebar/Menu/MenuSub";
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
  "ps-[14px]",
  "ps-[2.2rem]",
  "ps-[2.2rem]",
  "ps-[2.2rem]",
  "ps-[2.2rem]",
  "ps-[2.2rem]",
];

const levelBorderLeft = [
  "before:start-[3.2rem]",
  "before:start-[4rem]",
  "before:start-[3.2rem]",
  "before:start-[3.2rem]",
];

const SideBarMenu = () => {
  const menuApi = [
    {
      heading: "General",
    },
    {
      id: "1",
      title: "Singer",
      path: "/singers",
      icon: "fa-light fa-user",
      children: [],
    },
    {
      id: "2",
      title: "Musics",
      path: "/musics",
      icon: "fa-light fa-music",
      children: [],
    },
    {
      id: "3",
      title: "Albums",
      icon: "ki-outline ki-book-square",
      children: [
        {
          id: "4",
          title: "Albums",
          icon: "fa-light fa-album-circle-user",
          children: [
            {
              id: "5",
              title: "Sub Albums",
              children: [
                {
                  title: "Albums",
                  path: "/albums",
                  icon: "",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "6",
      title: "Settings",
      path: "/settings",
      icon: "ki-outline ki-setting",
      children: [],
    },
  ];
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
        <MenuItem key={index}>
          <MenuLink>
            <MenuIcon>
              <i className={item.icon} />
            </MenuIcon>
            <MenuTitle>{item.title}</MenuTitle>
            {buildMenuArrowButton()}
          </MenuLink>
          <MenuSub className={clsx(levelPaddingLeft[0])}>
            {buildMenuItemChildren(item.children, index)}
          </MenuSub>
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={index}>
          <MenuLink path={item.path}>
            <MenuIcon>
              <i className={item.icon} />
            </MenuIcon>
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
    index: number,
    level: number = 0
  ) => {
    console.log(level);
    return items.map((item, index) => {
      return buildMenuItemChild(item, index, level);
    });
  };
  const buildMenuItemChild = (
    item: IMenuItemConfig,
    index: number,
    level: number = 1
  ) => {
    if (item.children && item.children.length > 0) {
      console.log(level);
      return (
        <MenuItem key={index}>
          <MenuLink className={clsx(levelGap[level])}>
            <span className="menu-bullet flex w-[6px] shrink-0"></span>

            <MenuTitle>{item.title}</MenuTitle>
            {buildMenuArrowButton()}
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
          <MenuLink
            path={item.path}
            className={clsx(levelPaddingLeft[level], levelGap[level])}
          >
            <span className="menu-bullet flex w-[6px] shrink-0"></span>
            <MenuTitle>{item.title}</MenuTitle>
          </MenuLink>
        </MenuItem>
      );
    }
  };
  const buildMenuArrowButton = () => {
    return (
      <div className="menu-arrow justify-end">
        <KeenIcons icon={"Plus"} />
      </div>
    );
  };

  return <Menu>{buildMenu(menuApi)}</Menu>;
};

export { SideBarMenu };
