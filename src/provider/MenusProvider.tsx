import { createContext, type PropsWithChildren, useState } from "react";
import { IMenuItemConfig, TMenuConfig } from "@ui";

export interface IMenusProps {
  configs: Map<string, TMenuConfig | null>;
  setMenuConfig: (name: string, config: TMenuConfig | null) => void;
  getMenuConfig: (name: string) => TMenuConfig | null;
  setCurrentMenuItem: (config: IMenuItemConfig | null) => void;
  getCurrentMenuItem: () => IMenuItemConfig | null;
}

const initialProps: IMenusProps = {
  configs: new Map(),
  setMenuConfig: () => {},
  getMenuConfig: () => null,
  setCurrentMenuItem: () => {},
  getCurrentMenuItem: () => null,
};

const MenuContext = createContext<IMenusProps>(initialProps);

const MenusProvider = ({ children }: PropsWithChildren) => {
  const [currentMenuItem, setCurrentMenuItem] =
    useState<IMenuItemConfig | null>(null);
  const [configs, setConfigs] = useState<Map<string, TMenuConfig | null>>(
    () => new Map()
  );

  const setMenuConfig = (name: string, config: TMenuConfig | null) => {
    setConfigs((prevConfigs) => new Map(prevConfigs).set(name, config));
  };

  const getCurrentMenuItem = (): IMenuItemConfig | null => {
    return currentMenuItem;
  };

  const getMenuConfig = (name: string): TMenuConfig | null => {
    return configs.get(name) ?? null;
  };

  return (
    <MenuContext.Provider
      value={{
        configs,
        setMenuConfig,
        getMenuConfig,
        setCurrentMenuItem,
        getCurrentMenuItem,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenusProvider, MenuContext };
