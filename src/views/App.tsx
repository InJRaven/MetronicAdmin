import { FC, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { authRoutesConfig, mainRoutesConfig } from "@/routes/RoutesConfig";
import ScrollToTop from "@/utils/ScrollToTop";
import { useTheme } from "@hooks";
import { Toaster } from "@ui";

export const ThemeToggle: FC = () => {
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
  const routes = useRoutes([...mainRoutesConfig, ...authRoutesConfig]);
  return (
    <>
      <ThemeToggle />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
      <Toaster />
    </>
  );
};

export default App;
