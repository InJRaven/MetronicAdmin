import { Link, NavLink } from "react-router-dom";

import { useState } from "react";
import "./Sidebar.scss";
import { Button, KeenIcons } from "@/components/ui";
import clsx from "clsx";
import { SideBarContent } from "./";
interface SideBarType {
  className?: string;
}

const SideBar: React.FC<SideBarType> = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const menus = [
    {
      heading: "General",
    },
    {
      id: "1",
      title: "Singer",
      path: "/singers",
      icon: "fa-light fa-user",
      children: [],
    },
    {
      id: "2",
      title: "Musics",
      path: "/musics",
      icon: "fa-light fa-music",
      children: [],
    },
    {
      id: "3",
      title: "Albums",
      path: "/albums",
      icon: "fa-light fa-album-circle-user",
      children: [
        {
          id: "4",
          title: "Albums",
          path: "/albums",
          icon: "fa-light fa-album-circle-user",
          children: [
            {
              id: "4",
              title: "Albums",
              path: "/albums",
              icon: "fa-light fa-album-circle-user",
            },
          ],
        },
      ],
    },

  ];
  const handleCollapse = () => setIsCollapse((prev) => !prev);
  return (
    <aside className={clsx("sidebar", isCollapse && "collapse")}>
      <div className="sidebar__header">
        <Link to="/" className="link-logo">
          <i className="fa-solid fa-list-music" />
          <span className="name-brand">MusicWeb</span>
        </Link>

        <Button
          isIcon
          color="Light"
          onClick={handleCollapse}
          className="btn-collpase"
        >
          <KeenIcons
            icon={"BlackLeftLine"}
            style={"Filled"}
            className={`transition-transform duration-200 ${
              isCollapse && "rotate-180"
            }`}
          />
        </Button>
      </div>
      <div className="sidebar__content">
        <div className="sidebar__navigation">
          <div className="navigation__menu">
            <div className="navigation__menu--item group">
              <NavLink to="/" className="navigation__menu--link">
                <span className="menu-icon">
                  <i className="ki-outline ki-element-11"></i>
                </span>
                <span className="menu-title group-hover:text-primary">
                  Dashboard
                </span>
              </NavLink>
            </div>

            {/* Manager Item: Start */}
            {menus.map((item) =>
              item.heading ? (
                <li key={item.heading} className={`navigation__menu--item menu-heading`}>
                  {isCollapse ? "..." : "Manager"}
                </li>
              ) : (
                <li key={item.id} className="navigation__menu--item group">
                  <NavLink
                    to={item.path || ""}
                    className="navigation__menu--link"
                  >
                    <span className="menu-icon">
                      <i className={item.icon} />
                    </span>
                    <span className="menu-title group-hover:text-primary">
                      {item.title}
                    </span>
                  </NavLink>
                </li>
              )
            )}
            {/* Manager Item: End */}

            <li className="navigation__menu--item group">
              <NavLink to="/settings" className="navigation__menu--link">
                <span className="menu-icon">
                  <KeenIcons style={"Outline"} icon={"Setting"} />
                </span>
                <span className="menu-title group-hover:text-primary">
                  Settings
                </span>
              </NavLink>
            </li>
          </div>
        </div>
      </div>
      <SideBarContent />
    </aside>
  );
};

export default SideBar;
