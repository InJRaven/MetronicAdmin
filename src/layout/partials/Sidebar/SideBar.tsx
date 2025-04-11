import { Link, NavLink } from "react-router-dom";

import { useState } from "react";
import "./Sidebar.scss";
import { Button, KeenIcons } from "@/components/ui";
import clsx from "clsx";
interface SideBarType {
  className?: string;
}

const SideBar: React.FC<SideBarType> = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const menus = [
    {
      title: "Singer",
      path: "/singers",
      icon: "fa-light fa-user",
    },
    {
      title: "Musics",
      path: "/musics",
      icon: "fa-light fa-music",
    },
    {
      title: "Albums",
      path: "/albums",
      icon: "fa-light fa-album-circle-user",
    },
  ];
  const handleCollapse = () => setIsCollapse((prev) => !prev);
  console.log(isCollapse);
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
        <nav className="sidebar__navigation">
          <ul className="navigation__menu">
            <li className="navigation__menu--item group">
              <NavLink to="/" className="navigation__menu--link">
                <span className="menu-icon">
                  <i className="ki-outline ki-element-11"></i>
                </span>
                <span className="menu-title group-hover:text-primary">
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li className={`navigation__menu--item menu-heading`}>
              {isCollapse ? "..." : "Manager"}
            </li>

            {/* Manager Item: Start */}
            {menus.map((item) => (
              <li key={item.title} className="navigation__menu--item group">
                <NavLink to={item.path} className="navigation__menu--link">
                  <span className="menu-icon">
                    <i className={item.icon} />
                  </span>
                  <span className="menu-title group-hover:text-primary">
                    {item.title}
                  </span>
                </NavLink>
              </li>
            ))}
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
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
