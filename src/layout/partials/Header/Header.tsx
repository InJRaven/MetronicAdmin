import { useTheme } from "@/hooks";
import "./Header.scss";
import { Container } from "@/components/ui";
import clsx from "clsx";

interface HeaderType {
  className?: string;
}

const Header: React.FC<HeaderType> = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header justify-center">
      <Container.Fixed className="flex items-center justify-between">
        <div className="breadcrumb">
          <h1 className="text-2.5xl font-bold">Breadcrumb</h1>
        </div>

        <button className="btn btn-icon btn-outline" onClick={toggleTheme}>
          <i className={ clsx( theme === 'light' ? 'ki-outline ki-moon' : 'ki-outline ki-sun')}/>
        </button>
      </Container.Fixed>
    </header>
  );
};

export default Header;
