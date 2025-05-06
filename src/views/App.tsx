import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@ui";
import { PathnameProvider } from "@/provider";
import { AppRouting } from "@/routes/AppRouting";


// export const ThemeToggle = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <button
//       onClick={toggleTheme}
//       className="dark:shadow-dark-primary px-4 py-2 rounded-lg text-white transition-all duration-300 bg-primary hover:bg-primary-active hover:shadow-light-primary"
//     >
//       {theme === "dark" ? "🌙 Switch to Light Mode" : "☀️ Switch to Dark Mode"}
//     </button>
//   );
// };

const App = () => {
  return (
    <BrowserRouter>

      <PathnameProvider>
        <AppRouting />
      </PathnameProvider>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
