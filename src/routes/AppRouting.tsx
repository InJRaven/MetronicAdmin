import { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AppRoutingSetup } from "./";

const AppRouting = (): ReactElement => {
  const [previousLocation, setPreviousLocation] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);
  const location = useLocation();
  const path = location.pathname.trim();

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
    } else {
      setPreviousLocation(path);
      if (path === previousLocation) {
        setPreviousLocation("");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    if (!CSS.escape(window.location.hash)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [previousLocation]);

  return <AppRoutingSetup />;
};

export { AppRouting };
