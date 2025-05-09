import { useLocation } from "react-router-dom";
import "./Header.scss";
import { Container } from "@/components/ui";
import { Breadcrumbs } from "@/layout/partials";
import { HeaderTopBar } from "./";

interface HeaderType {
  className?: string;
}

const Header: React.FC<HeaderType> = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <Container.Fixed className="custom-container justify-between">
        {pathname.includes("/") ? <Breadcrumbs /> : <div />}
        <HeaderTopBar />
      </Container.Fixed>
    </header>
  );
};

export { Header };
