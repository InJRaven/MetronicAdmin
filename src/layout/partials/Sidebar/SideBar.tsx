import { useEffect, useRef, useState } from "react";
import { getHeight } from "@/utils";
import clsx from "clsx";
import "./Sidebar.scss";

import { SideBarContent, SidebarHeader } from "./";
import { useResponsive, useViewport } from "@hooks";
interface SideBarType {
  className?: string;
}

const SideBar: React.FC<SideBarType> = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const headerRef = useRef<HTMLDivElement>(null);

  const [scrollableHeight, setScrollableHeight] = useState<number>(0);
  const scrollableOffset = 40;
  const [viewportHeight] = useViewport();
  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = getHeight(headerRef.current);
      const availableHeight = viewportHeight - headerHeight - scrollableOffset;
      setScrollableHeight(availableHeight);
    } else {
      setScrollableHeight(viewportHeight);
    }
  }, [viewportHeight]);

  const desktopMode = useResponsive("up", "lg");

  const handleCollapse = () => setIsCollapse((prev) => !prev);
  return (
    <aside className={clsx("sidebar", isCollapse && "collapse")}>
      {desktopMode && <SidebarHeader />}

      <SideBarContent {...(desktopMode && { height: scrollableHeight })} />
    </aside>
  );
};

export { SideBar };
