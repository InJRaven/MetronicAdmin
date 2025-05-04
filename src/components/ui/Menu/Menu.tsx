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
  dropdownTimeout: 0,
  // Default function for opening an accordion (to be overridden)
  setOpenAccordion: (parentId: string, id: string) => {
    console.log(`Accordion at level ${parentId}, with ID ${id} is now open`);
  },
  // Default function for checking if an accordion is open (to be overridden)
  isOpenAccordion: (parentId: string, id: string) => {
    console.log(
      `Checking if accordion at level ${parentId}, with ID ${id} is open`
    );
    return false; // By default, no accordion is open
  },
};
const MenuContext = createContext(initalProps);
const useMenu = () => useContext(MenuContext);

const MenuComponent = ({
  className,
  children,
  disabled = false,
  highlight = false,
  dropdownTimeout = 150,
  multipleExpand = false,
}: IMenuProps) => {
  const [openAccordions, setOpenAccordions] = useState<{
    [key: string]: string | null;
  }>({});

  const setOpenAccordion = (parentId: string, id: string) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [parentId]: prevState[parentId] === id ? null : id, // Toggle the current item and collapse others at the same level
    }));
  };
  
  const isOpenAccordion = (parentId: string, id: string) => {
    return openAccordions[parentId] === id;
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
        dropdownTimeout,
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
