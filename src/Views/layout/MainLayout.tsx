import { Outlet } from "react-router-dom";
import { Header, SideBar } from "../../Components/Partials";

const MainLayout = () => {
  return (
    <div className="wrapper min-h-screen w-full transition-colors duration-200 bg-light dark:bg-coal-600 grid grid-rows-1 grid-cols-[auto_1fr] ">
      <SideBar className="col-start-1 row-start-1 col-span-1 row-span-1" />
      <main className="col-start-2 row-start-1 col-span-1 row-span-1 w-full flex flex-col gap-[2rem]">
        <Header />
        <div className="pt-0 pr-[4rem] pb-[3rem] pl-[4rem] flex flex-col gap-[4rem] container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
