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
      <Container.Fixed className="flex items-center justify-between">
        {pathname.includes("/account") ? <Breadcrumbs /> : <div />}
        <HeaderTopBar />
      </Container.Fixed>
    </header>
  );
};

export { Header };
