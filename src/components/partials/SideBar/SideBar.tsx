import { Link, NavLink } from "react-router-dom";
import { Button } from "@base";
import { useState } from "react";
import "./Sidebar.scss";
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
          className="rounded-[0.8rem] absolute start-full top-2/4 rtl:translate-x-2/4 -translate-x-2/4 -translate-y-2/4 border-gray-200 dark:!bg-coal-500 !text-gray-500 hover:!text-gray-900 "
        />
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

            <li />
            <li className="sidebar__menu--item group">
              <NavLink
                to="/settings"
                className={`sidebar__menu--link grow ${
                  isCollapse ? "gap-[10px]" : "w-[4rem] gap-0"
                }`}
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
    </aside>
  );
};

export default SideBar;
