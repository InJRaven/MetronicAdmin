import { Button, Container, KeenIcon } from "@/components/ui";
import { Fragment } from "react/jsx-runtime";
import "./CustomMenu.scss";
import { MenuTreeView } from "./";

const CustomMenuPage = () => {


  return (
    <Fragment>
      <Container.Fixed>
        <div className="section-heading">
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-2.5xl font-medium leading-none text-mono">
              Sidebar Setting
            </h1>
            <p className="flex items-center gap-2 text-sm font-normal text-secondary-foreground">
              Central Hub for Sidebar Menu Customization
            </p>
          </div>
          <Button
            variant={"Outline"}
            size={"Default"}
            className="border-gray-300"
          >
            <KeenIcon icon="notepad-edit" style="outline" />
            <span>Edit</span>
          </Button>
        </div>
      </Container.Fixed>
      <Container.Fixed className="custom-container flex-col">
        <MenuTreeView />
      </Container.Fixed>
    </Fragment>
  );
};

export { CustomMenuPage };
