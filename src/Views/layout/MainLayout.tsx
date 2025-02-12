import { Outlet } from "react-router-dom";
import { Header, SideBar } from "../../Components/Partials";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <SideBar/>
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
