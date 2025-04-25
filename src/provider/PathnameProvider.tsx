import {
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useLocation } from "react-router-dom";

interface IPathnameContextProps {
  pathname: string;
  prevPathname: string | undefined;
}

const PathnameContext = createContext<IPathnameContextProps | undefined>(
  undefined
);

const PathnameProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const [prevPathname, setPrevPathname] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    setPrevPathname(() => {
      return pathname;
    });
  }, [pathname]);

  return (
    <PathnameContext.Provider value={{ pathname, prevPathname }}>
      {children}
    </PathnameContext.Provider>
  );
};


export { PathnameProvider,PathnameContext, type IPathnameContextProps };
