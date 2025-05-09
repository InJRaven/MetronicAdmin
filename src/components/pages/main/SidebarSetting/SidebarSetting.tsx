import {
  Button,
  Container,
  IMenuItemConfig,
  Input,
  KeenIcon,
  TMenuConfig,
} from "@/components/ui";
import { Fragment } from "react/jsx-runtime";

import "./SidebarSetting.scss";
import { useMenus } from "@/hooks";
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
  "ps-[4.5rem]",
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
const SidebarSetting = () => {
  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig("primary");

  const buildContent = (menu: TMenuConfig) => {
    return menu.map((item, index) => {
      if (item.heading) {
        return buildContentHeading(item, index);
      } else {
        return buildContentRoot(item, index);
      }
    });
  };

  const buildContentRoot = (item: IMenuItemConfig, index: number) => {
    if (item.children && item.children.length > 0) {
      return (
        <div className="menu-item" key={index}>
          <div className={clsx("menu-link", levelGap[0])}>
            {item.icon && (
              <div className="menu-icon">
                <KeenIcon icon={item.icon} style={item.iconStyle} />
              </div>
            )}
            <div className="menu-title">
              <Input value={item.title} disabled={item.disabled} />
            </div>
          </div>
          <div
            className={clsx(
              "menu-accrodion",
              levelPaddingLeft[0],
              levelBorderLeft[0]
            )}
          >
            {buildContentItemChildren(item.children, index, 1)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="menu-item" key={index}>
          <div className={clsx("menu-link", levelGap[0])}>
            {item.icon && (
              <div className="menu-icon">
                <KeenIcon icon={item.icon} style={item.iconStyle} />
              </div>
            )}
            <div className="menu-title">
              <Input value={item.title} disabled={item.disabled} />
            </div>
            <Input value={item.path} disabled={item.disabled} />
          </div>
        </div>
      );
    }
  };

  const buildContentHeading = (item: IMenuItemConfig, index: number) => {
    return (
      <div className="menu-heading" key={index}>
        <Input value={item.heading} disabled={item.disabled} />
      </div>
    );
  };

  const buildContentItemChildren = (
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
    if (item.children && item.children.length > 0) {
      return (
        <div className="menu-item" key={index}>
          <div className={clsx("menu-link", levelGap[level])}>
            {item.icon && (
              <div className="menu-icon">
                <KeenIcon icon={item.icon} style={item.iconStyle} />
              </div>
            )}
            <div className="menu-title">
              <Input value={item.title} disabled={item.disabled} />
            </div>
          </div>
          <div
            className={clsx(
              "menu-accrodion",
              levelPaddingLeft[level],
              levelBorderLeft[level]
            )}
          >
            {buildContentItemChildren(item.children, index, level + 1)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="menu-item" key={index}>
          <div className={clsx("menu-link", levelGap[level])}>
            {item.icon && (
              <div className="menu-icon">
                <KeenIcon icon={item.icon} style={item.iconStyle} />
              </div>
            )}
            <div className="menu-title">
              <Input value={item.title} disabled={item.disabled} />
            </div>
            <Input value={item.path} disabled={item.disabled} />
          </div>
        </div>
      );
    }
  };
  return (
    <Fragment>
      <Container.Fixed>
        <div className="section-heading">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-2.5xl font-medium leading-none text-mono">
              Sidebar Setting
            </h1>
            <p className="flex items-center gap-2 text-sm font-normal text-secondary-foreground">
              Central Hub for Sidebar Menu Customization
            </p>
          </div>
          <Button variant={"Outline"} size={"Default"} className="border-gray-300">
            <KeenIcon icon="notepad-edit" style="outline" />
            <span>Edit</span>
          </Button>
        </div>
      </Container.Fixed>
      <Container.Fixed className="custom-container flex-col">
        <div className="menu-content">
          {menuConfig && buildContent(menuConfig)}
        </div>
      </Container.Fixed>
    </Fragment>
  );
};

export { SidebarSetting };
