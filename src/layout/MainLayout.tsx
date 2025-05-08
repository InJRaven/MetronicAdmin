import useBodyClasses from "@/hooks/useBodyClasses";
import { Main, MainLayoutProvider } from ".";

const MainLayout = () => {
  useBodyClasses(`
    antialiased
    h-full
    text-base
    text-foreground
    bg-background
    `);

  return (
    <MainLayoutProvider>
      <Main />
    </MainLayoutProvider>
  );
};
export { MainLayout };
