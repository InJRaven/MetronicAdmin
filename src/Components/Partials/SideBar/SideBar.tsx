import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../../UI";
import { useState } from "react";
import "./Sidebar.scss";
interface SideBarType {
  className?: string;
}

const menus = [
  {
    id: 1,
    link: "/dashboard",
    icon: "ki-filled ki-element-11",
    name: "Dashboard",
    children: [],
  },
  {
    id: 2,
    link: "",
    icon: "ki-filled ki-profile-circle",
    name: "Public Profile",
    children: [
      {
        id: 5,
        icon: "",
        link: "/profile",
        name: "Works",
      },
      {
        id: 6,
        icon: "",
        link: "/network",
        name: "Network",
      },
    ],
  },
  {
    id: 3,
    link: "/auth",
    icon: "ki-filled ki-security-user",
    name: "Authentication",
    children: [],
  },
  {
    id: 4,
    link: "/settings",
    icon: "ki-filled ki-setting-2",
    name: "Settings",
    children: [],
  },
];
const SideBar: React.FC<SideBarType> = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(true);

  const handleCollapse = () => setIsCollapse((prev) => !prev);
  console.log(isCollapse);
  return (
    <aside
      className={`background-theme ${
        isCollapse ? "w-[28rem]" : "w-[8rem]"
      } sidebar`}
    >
      <div className=" relative flex items-center self-stretch px-[2.5rem] border-b border-gray-200 h-header transition-colors duration-200 sidebar__header">
        <Link to="/" className="flex items-center gap-[1rem]">
          <i className="fa-solid font-bold text-2.5xl text-gray-900 fa-list-music" />

          <span
            className={`font-museo text-gray-900 text-xl uppercase transition-all duration-200 ease-in-out ${
              isCollapse ? "opacity-100" : "opacity-0"
            }`}
          >
            MusicWeb
          </span>
        </Link>

        <Button
          as="button"
          shape="Square"
          size="Medium"
          state="Icon"
          color="Light"
          variant="Light"
          onClick={handleCollapse}
          icon={
            <i
              className={`ki-filled ki-black-left-line transition-transform duration-200 ${
                !isCollapse && "rotate-180"
              }`}
            />
          }
          className="rounded-[0.8rem] absolute start-full top-2/4 rtl:translate-x-2/4 -translate-x-2/4 -translate-y-2/4 border-gray-200 bg-light-light dark:bg-coal-500 !text-gray-500 hover:!text-gray-900"
        />
      </div>
      <div className="sidebar__content flex grow shrink-0 py-[2rem] pe-[0.8rem] ">
        <nav className="grow shrink-0 flex ps-[1.8rem] pe-[1.2rem]">
          <ul className="sidebar__menu flex flex-col grow gap-[0.5rem]">
            <li className="sidebar__menu--item group">
              <NavLink
                to="/"
                className={`sidebar__menu--link flex items-center grow ${
                  isCollapse ? "gap-[10px]" : "gap-0"
                } ps-[10px] pe-[10px] py-[6px] hover:bg-secondary-active dark:hover:bg-coal-100`}
              >
                <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                  <i className="ki-outline ki-element-11 text-lg"></i>
                </span>
                <span
                  className={`menu-title text-base font-medium text-gray-800 group-hover:!text-primary transition-all overflow-hidden duration-200 ${
                    isCollapse
                      ? "opacity-100 max-w-[20rem]"
                      : "opacity-0 max-w-0"
                  } group-hover:!text-primary`}
                >
                  Dashboard
                </span>
              </NavLink>
            </li>

            <li className="sidebar__menu--item group">
              <NavLink
                to="/setting"
                className={`sidebar__menu--link flex items-center grow ${
                  isCollapse ? "gap-[10px]" : "gap-0"
                } ps-[10px] pe-[10px] py-[6px]`}
              >
                <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                  <i className="ki-outline ki-setting text-lg"></i>
                </span>
                <span
                  className={`menu-title text-base font-medium text-gray-800 group-hover:!text-primary transition-all overflow-hidden duration-200 ${
                    isCollapse
                      ? "opacity-100 max-w-[20rem]"
                      : "opacity-0 max-w-0"
                  } group-hover:!text-primary`}
                >
                  Settings
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* <nav className="flex flex-col items-start gap-[1rem] px-[2.5rem] self-stretch ">
          <NavLink
            to="/"
            className="w-full flex py-[1.2rem] px-[0.5rem] rounded-[0.6rem] gap-[1rem] items-center justify-start transition-all duration-200 hover:text-primary"
          >
            <span className="menu-icon items-start w-[20px] text-gray-800 font-medium">
              <i className="ki-filled ki-element-11 text-lg" />
            </span>

            <span
              className={`menu-title text-gray-800 text-base font-medium ease-in-out ${
                isCollapse ? "opacity-100" : "opacity-0"
              }`}
            >
              Dashboard
            </span>
          </NavLink>

          <NavLink
            to="/"
            className="w-full flex py-[1.2rem] px-[0.5rem] rounded-[0.6rem] gap-[1rem] items-center text-gray-800 text-base transition-all duration-200 hover:text-primary font-medium"
          >
            <span className="menu-icon items-start w-[20px] text-gray-800 font-medium">
              <i className="ki-filled ki-setting text-lg" />
            </span>

            <span
              className={`menu-title text-gray-800 text-base ease-in-out ${
                isCollapse ? "opacity-100" : "opacity-0"
              }`}
            >
              Settings
            </span>
          </NavLink>
        </nav> */}
    </aside>
  );
};

export default SideBar;
