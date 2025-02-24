import { Suspense } from "react";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { useRoutes } from "react-router-dom";
import { authRoutesConfig, mainRoutesConfig } from "../routes/RoutesConfig";
import ScrollToTop from "../utils/ScrollToTop";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="dark:shadow-dark-primary px-4 py-2 rounded-lg text-white transition-all duration-300 bg-primary hover:bg-primary-active hover:shadow-light-primary"
    >
      {theme === "dark" ? "🌙 Switch to Light Mode" : "☀️ Switch to Dark Mode"}
    </button>
  );
};

const App: React.FC = () => {
  const routes = useRoutes([...mainRoutesConfig, ...authRoutesConfig])
  return (
    <ThemeProvider>
      <ThemeToggle />
      <ScrollToTop />
      <Suspense fallback = {<div>Loading...</div>}>
        {routes}
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
