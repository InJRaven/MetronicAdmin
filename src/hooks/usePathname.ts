import { IPathnameContextProps, PathnameContext } from "@/provider";
import { useContext } from "react";

const usePathname = (): IPathnameContextProps => {
  const context = useContext(PathnameContext);
  if (!context) {
    throw new Error("usePathname must be used within a PathnameProvider");
  }
  return context;
};

export { usePathname };
