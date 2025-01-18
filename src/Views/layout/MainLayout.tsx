import { Outlet } from "react-router-dom";
import { Header, SideBar } from "../../Components/Partials";

const MainLayout = () => {
  return (
    <div className="wrapper min-h-screen w-full transition-colors duration-200 bg-light dark:bg-coal-600 grid grid-rows-1 grid-cols-[auto_1fr] ">
      <SideBar className ='col-start-1 row-start-1 col-span-1 row-span-1' />
      <main className="w-full col-start-2 row-start-1 col-span-1 row-span-1">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
