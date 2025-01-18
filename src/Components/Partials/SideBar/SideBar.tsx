import clsx from "clsx";
import { Link } from "react-router-dom";

interface SideBarType {
  className?: string;
}

const SideBar: React.FC<SideBarType> = ({ className }) => {
  return (
    <aside
      className={clsx(
        "w-[28rem] bg-coal-600 flex flex-col gap-[2rem]",
        className,
        "sidebar"
      )}
    >
      <Link
        to="/"
        className="padd relative flex items-center self-stretch gap-[1rem] logo"
      >
        <span className="text-gray-900 text-2.5xl uppercase font-bold tracking-[0.05rem]">
          <i className="fa-solid fa-list-music"/>
        </span>
        <span className="font-museo text-gray-900 text-xl uppercase">
            MusicWeb
        </span>
      </Link>
      
    </aside>
    
  );
};

export default SideBar;
