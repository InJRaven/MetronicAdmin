import { Fragment, useEffect } from "react";
import { Header, SideBar } from "../partials";
import { Outlet, useLocation } from "react-router-dom";
import { useMainLayout } from "@/layout";
import { useMenus } from "@/hooks";
import { useMenuCurrentItem } from "@ui/Menu/hooks";
import { Helmet } from "react-helmet-async";

const Main = () => {
  const { layout } = useMainLayout();
  const { pathname } = useLocation();
  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig("primary");
  const menuItem = useMenuCurrentItem(pathname, menuConfig);
  useEffect(() => {
    const bodyClass = document.body.classList;

    // Add a class to the body element
    bodyClass.add("main-layout");

    if (layout.options.sidebar.fixed) bodyClass.add("sidebar-fixed");
    if (layout.options.sidebar.collapse) bodyClass.add("sidebar-collapse");
    if (layout.options.header.fixed) bodyClass.add("header-fixed");

    // Remove the class when the component is unmounted
    return () => {
      bodyClass.remove("main-layout");
      bodyClass.remove("sidebar-fixed");
      bodyClass.remove("sidebar-collapse");
      bodyClass.remove("header-fixed");
    };
  }, [layout]);
  return (
    <Fragment>
      <Helmet>
        <title>{menuItem?.title}</title>
      </Helmet>
      <SideBar />
      <div className="wrapper flex grow flex-col">
        <Header />
        <main
          className="grow content pt-[2rem]"
          role="content"
        >
          <Outlet />
        </main>
      </div>
    </Fragment>
  );
};

export { Main };
