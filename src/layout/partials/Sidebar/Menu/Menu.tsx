import clsx from "clsx";
import { IMenuContextProps, IMenuItemProps, IMenuProps, MenuItem } from "./";

import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  memo,
  useContext,
  useState,
} from "react";

const initalProps: IMenuContextProps = {
  disabled: false,
  highlight: false,
  multipleExpand: false,
  setOpenAccordion: (parentId: string, id: string) => {
    console.log(`Accordion at level ${parentId}, with ID ${id} is now open`);
  },
  isOpenAccordion: (parentId: string, id: string) => {
    console.log(
      `Checking if accordion at level ${parentId}, with ID ${id} is open`
    );
    return false;
  },
};
const MenuContext = createContext(initalProps);
const useMenu = () => useContext(MenuContext);

const MenuComponent = ({
  className,
  children,
  highlight = false,
  disabled = false,
  multipleExpand = false,
}: IMenuProps) => {
  const [openMenu, setOpenMenu] = useState<{ [key: string]: string | null }>(
    {}
  );

  // Function to handle the accordion toggle
  const setOpenAccordion = (parentId: string, id: string) => {
    setOpenMenu((prevState) => ({
      ...prevState,
      [parentId]: prevState[parentId] === id ? null : id,
    }));
  };

  const isOpenAccordion = (parentId: string, id: string) => {
    return openMenu[parentId] === id;
  };

  const modifiedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      if (child.type === MenuItem) {
        const modifiedProps: Partial<IMenuItemProps> = {
          parentId: "root",
          id: `root-${index}`,
        };
        return cloneElement(child, modifiedProps);
      } else {
        return cloneElement(child);
      }
    }

    return child;
  });
  return (
    <MenuContext.Provider
      value={{
        disabled,
        highlight,
        multipleExpand,
        setOpenAccordion,
        isOpenAccordion,
      }}
    >
      <div className={clsx("menu", className)}>{modifiedChildren}</div>
    </MenuContext.Provider>
  );
};

MenuComponent.displayName = "Menu";
const Menu = memo(MenuComponent);

// eslint-disable-next-line react-refresh/only-export-components
export { Menu, useMenu };
