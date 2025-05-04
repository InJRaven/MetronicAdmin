import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { IMenuItemConfig, TMenuConfig } from "@ui";
import axios from "axios";
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
    new Map()
  );

  const setMenuConfig = useCallback(
    (name: string, config: TMenuConfig | null) => {
      setConfigs((prev) =>
        prev.get(name) === config ? prev : new Map(prev).set(name, config)
      );
    },
    []
  );

  const getCurrentMenuItem = (): IMenuItemConfig | null => {
    return currentMenuItem;
  };

  const getMenuConfig = (name: string): TMenuConfig | null => {
    return configs.get(name) ?? null;
  };

  useEffect(() => {
    const fetchMenuApi = async () => {
      try {
        const response = await axios.get(
          "https://6817c7535a4b07b9d1cd3afa.mockapi.io/api/v1/MenuAPI"
        );

        if (response.status === 200) {
          // setConfigs((prevConfigs) => {
          //   const newConfigs = new Map(prevConfigs);
          //   response.data.map((item: Record<string, TMenuConfig>) => {
          //     const [key] = Object.keys(item);
          //     newConfigs.set(key, item[key]);
          //   });
          //   return newConfigs;
          // });

          // Short Code
          setConfigs((prev) => {
            const updated = new Map(prev);
            response.data.forEach((item: Record<string, TMenuConfig>) =>
              updated.set(Object.keys(item)[0], item[Object.keys(item)[0]])
            );
            return updated;
          });
        }
      } catch (Err) {
        console.error("Failed to load menus:", Err);
      }
    };
    fetchMenuApi();
  }, []);

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

// eslint-disable-next-line react-refresh/only-export-components
export { MenusProvider, MenuContext };
