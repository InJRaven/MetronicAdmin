/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { ILayoutConfig } from "@/provider";
import { MainLayoutConfig } from "./";
// import { useLocation } from "react-router-dom";
import { useLayout, useMenus, useScrollPosition } from "@hooks";
import axios from "axios";
import { deepMerge } from "@/utils";

interface IMainLayoutProviderProps {
  layout: ILayoutConfig;
  headerSticky: boolean;
  setSidebarCollapse: (collapse: boolean) => void;
}

const initalLayoutProps: IMainLayoutProviderProps = {
  layout: MainLayoutConfig,
  headerSticky: false,
  setSidebarCollapse: (collapse: boolean) => {
    console.log(`${collapse}`);
  },
};

const MainLayoutContext =
  createContext<IMainLayoutProviderProps>(initalLayoutProps);
const useMainLayout = () => useContext(MainLayoutContext);

const MainLayoutProvider = ({ children }: PropsWithChildren) => {
  //   const { pathname } = useLocation();
  const { setMenuConfig } = useMenus();
  useEffect(() => {
    const fetchMenuApi = async () => {
      try {
        const response = await axios.get(
          "https://6817c7535a4b07b9d1cd3afa.mockapi.io/api/v1/MenuAPI"
        );

        if (response.status === 200) {
          setMenuConfig("primary", response.data);
        }
      } catch (Err) {
        console.error("Failed to load menus:", Err);
      }
    };
    fetchMenuApi();
  }, []);

  const { getLayout, updateLayout, setCurrentLayout } = useLayout();

  const getLayoutConfig = () => {
    return deepMerge(MainLayoutConfig, getLayout(MainLayoutConfig.name));
  };
  const [layout, setLayout] = useState(getLayoutConfig);
  useEffect(() => {
    setCurrentLayout(layout);
  });

  const scrollPosition = useScrollPosition();
  const headerSticky: boolean = scrollPosition > 0;
  
  const setSidebarCollapse = (collapse: boolean) => {
    const updatedLayout = {
      options: {
        sidebar: {
          collapse,
        },
      },
    };

    updateLayout(MainLayoutConfig.name, updatedLayout);
    setLayout(getLayoutConfig());
  };

  return (
    <MainLayoutContext.Provider
      value={{ layout, headerSticky, setSidebarCollapse }}
    >
      {children}
    </MainLayoutContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export { MainLayoutProvider, useMainLayout };
