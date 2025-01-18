import clsx from "clsx";
import { Link } from "react-router-dom";
import { Button } from "../../UI";
import { useState } from "react";

interface SideBarType {
  className?: string;
}

const SideBar: React.FC<SideBarType> = ({ className }) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const handleCollapse = () => setIsCollapse((prev) => !prev);

  return (
    <aside
      className={clsx(
        "w-[28rem] bg-coal-600 flex flex-col gap-[2rem]",
        className,
        "sidebar"
      )}
    >
      <div className=" relative flex items-center self-stretch p-[2.5rem] logo">
        <Link to="/" className="w-full flex items-center gap-[1rem]">
          <span className="text-gray-900 text-2.5xl uppercase font-bold tracking-[0.05rem]">
            <i className="fa-solid fa-list-music" />
          </span>
          <span className="font-museo text-gray-900 text-xl uppercase">
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
                isCollapse && "rotate-180"
              }`}
            />
          }
          className="!bg-[#FFF] hover:text-coal-600 hover:bg-[#FFF] hover:border-[#F1F1F4] rounded-[0.8rem] absolute start-full top-2/4 rtl:translate-x-2/4 -translate-x-2/4 -translate-y-2/4 !border-[#F1F1F4] "
        />
      </div>
      <nav className="w-full flex flex-col items-start gap-[1rem] px-[2.5rem] self-stretch menu">
        <Link
          to="/"
          className="w-full flex py-[1.2rem] px-[0.5rem] rounded-[0.6rem] gap-[1rem] items-center text-gray-800 text-base transition-all duration-200 hover:text-primary font-medium"
        >
          <span>
            <i className="ki-filled ki-element-11 text-lg text-gray-800 font-medium" />
          </span>
          Dashboard
        </Link>
        <Link
          to="/"
          className="w-full flex py-[1.2rem] px-[0.5rem] rounded-[0.6rem] gap-[1rem] items-center text-gray-800 text-base transition-all duration-200 hover:text-primary font-medium"
        >
          <span>
            <i className="ki-filled ki-element-11 text-lg text-gray-800 font-medium" />
          </span>
          Dashboard
        </Link>
        <Link
          to="/"
          className="w-full flex py-[1.2rem] px-[0.5rem] rounded-[0.6rem] gap-[1rem] items-center text-gray-800 text-base transition-all duration-200 hover:text-primary font-medium"
        >
          <span>
            <i className="ki-filled ki-element-11 text-lg text-gray-800 font-medium" />
          </span>
          Dashboard
        </Link>
        <Link
          to="/"
          className="w-full flex py-[1.2rem] px-[0.5rem] rounded-[0.6rem] gap-[1rem] items-center text-gray-800 text-base transition-all duration-200 hover:text-primary font-medium"
        >
          <span>
            <i className="ki-filled ki-element-11 text-lg text-gray-800 font-medium" />
          </span>
          Dashboard
        </Link>
        <Link
          to="/"
          className="w-full flex py-[1.2rem] px-[0.5rem] rounded-[0.6rem] gap-[1rem] items-center text-gray-800 text-base transition-all duration-200 hover:text-primary font-medium"
        >
          <span>
            <i className="ki-filled ki-setting text-lg text-gray-800 font-medium" />
          </span>
          Setting
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
