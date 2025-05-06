import { LayoutContext, type ILayoutProps } from "@/provider";
import { useContext } from "react";

const useLayout = (): ILayoutProps => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};

export { useLayout };
