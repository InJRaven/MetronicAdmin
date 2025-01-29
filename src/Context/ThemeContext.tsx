import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define possible themes
type Theme = "light" | "dark";

// Define context type
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create Context with default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component to provide context to other components
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Set default theme based on localStorage or system preference
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      // Check if there's a saved theme in localStorage
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme) {
        return savedTheme;
      }
      // If no saved theme, use the system's preferred theme
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    // Update the body's background color or other properties based on the theme
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    document.body.setAttribute("data-theme", theme);
    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
const useTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
