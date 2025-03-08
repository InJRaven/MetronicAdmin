// @ts-expect-error: '@partials'
import { Header, SideBar } from "@partials";
import { Outlet } from "react-router-dom";
// import { Header, SideBar } from "../../components/partials";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <SideBar />
      <main id="main" className="main">
        <Header />
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
