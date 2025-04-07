import { Link, NavLink } from "react-router-dom";

import { useState } from "react";
import "./Sidebar.scss";
import { Button, KeenIcons } from "@/components/ui";
interface SideBarType {
  className?: string;
}

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
      <div className="sidebar__header">
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
          isIcon
          color="Light"
          onClick={handleCollapse}
          className="btn-collpase border"
        >
          <KeenIcons 
            icon={'BlackLeftLine'}
            style={'Filled'}
            className={`transition-transform duration-200 ${
              !isCollapse && "rotate-180"
            }`}
          />
        </Button>
      </div>
      <div className="sidebar__content flex grow shrink-0 py-[2rem] pe-[0.8rem] ">
        <nav className="grow shrink-0 flex ps-[1.8rem] pe-[1.2rem]">
          <ul className="sidebar__menu flex">
            <li className="sidebar__menu--item group">
              <NavLink
                to="/"
                className={`sidebar__menu--link grow ${
                  isCollapse ? "gap-[10px]" : "w-[4rem] gap-0"
                }`}
              >
                <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                  <i className="ki-outline ki-element-11 text-lg"></i>
                </span>
                <span
                  className={`menu-title text-base font-medium text-gray-800 transition-all overflow-hidden duration-200 ${
                    isCollapse
                      ? "opacity-100 max-w-[20rem]"
                      : "opacity-0 max-w-0"
                  } group-hover:!text-primary`}
                >
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li
              className={`sidebar__menu--item justify-center uppercase text-b-13-20-medium text-gray-500`}
            >
              <span
                className={`${
                  isCollapse ? "ps-[12px]" : "ps-[15px]"
                } pe-[10px] py-[6px]`}
              >
                {isCollapse ? "Manager" : "..."}
              </span>
            </li>

            {/* /** Manager Item: Start*/}

            <li className="sidebar__menu--item group">
              <NavLink
                to="/singers"
                className={`sidebar__menu--link grow ${
                  isCollapse ? "gap-[10px]" : "w-[4rem] gap-0"
                }`}
              >
                <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                  <i className="fa-light fa-user-music text-lg"></i>
                </span>
                <span
                  className={`menu-title text-base font-medium text-gray-800 group-hover:!text-primary transition-all overflow-hidden duration-200 ${
                    isCollapse
                      ? "opacity-100 max-w-[20rem]"
                      : "opacity-0 max-w-0"
                  } group-hover:!text-primary`}
                >
                  Singers
                </span>
              </NavLink>
            </li>

            <li className="sidebar__menu--item group">
              <NavLink
                to="/musics"
                className={`sidebar__menu--link grow ${
                  isCollapse ? "gap-[10px]" : "w-[4rem] gap-0"
                }`}
              >
                <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                  <i className="fa-light fa-music text-lg"></i>
                </span>
                <span
                  className={`menu-title text-base font-medium text-gray-800 group-hover:!text-primary transition-all overflow-hidden duration-200 ${
                    isCollapse
                      ? "opacity-100 max-w-[20rem]"
                      : "opacity-0 max-w-0"
                  } group-hover:!text-primary`}
                >
                  Musics
                </span>
              </NavLink>
            </li>

            <li className="sidebar__menu--item group">
              <NavLink
                to="/albums"
                className={`sidebar__menu--link grow ${
                  isCollapse ? "gap-[10px]" : "w-[4rem] gap-0"
                }`}
              >
                <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                  <i className="fa-light fa-album-circle-user text-lg"></i>
                </span>
                <span
                  className={`menu-title text-base font-medium text-gray-800 group-hover:!text-primary transition-all overflow-hidden duration-200 ${
                    isCollapse
                      ? "opacity-100 max-w-[20rem]"
                      : "opacity-0 max-w-0"
                  } group-hover:!text-primary`}
                >
                  Albums
                </span>
              </NavLink>
            </li>
            {/* /** Manager Item: End*/}
            <li className="sidebar__menu--item group">
              <NavLink
                to="/settings"
                className={`sidebar__menu--link grow ${
                  isCollapse ? "gap-[10px]" : "w-[4rem] gap-0"
                }`}
              >
                <span className="menu-icon items-start text-gray-500 dark:text-gray-400 w-[20px]">
                  <KeenIcons style={"Outline"} icon={'Setting'} className="text-lg" />
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
    </aside>
  );
};

export default SideBar;
