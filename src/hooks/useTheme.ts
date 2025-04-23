import { ThemeContext, type ThemeContextType } from "@/provider";
import { useContext } from "react";

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { useTheme };
