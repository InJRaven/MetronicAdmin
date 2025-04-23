import { SideBarMenu } from "./";

interface Props {
  height?: number;
}

const SideBarContent = ({ height = 0 }: Props) => {
  return (
    <div className="sidebar-content">
      <div
        className="scrollable-y-hover grow shrink-0 flex ps-[0.8rem] lg:ps-[2rem] pe-[0.4rem] lg:pe-[1.2rem]"
        style={{
          ...{ height: `700px` },
        }}
      >
        <SideBarMenu />
      </div>
    </div>
  );
};

export { SideBarContent };
