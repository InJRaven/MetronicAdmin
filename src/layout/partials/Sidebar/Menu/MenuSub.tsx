import { Children, cloneElement, isValidElement, memo } from "react";
import { Collapsible } from "@ui";
import { IMenuSubProps, MenuItem } from "./";
import clsx from "clsx";

const MenuSubComponent = ({
  parentId,
  className,
  open,
  children,
}: IMenuSubProps) => {
  const finalParentId = parentId !== undefined ? parentId : "";
  const modifiedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      if (child.type === MenuItem) {
        const modifiedProps = {
          parentId: finalParentId,
          id: `${finalParentId}-${index}`,
        };
 
        return cloneElement(child, modifiedProps);
      } else {
        return cloneElement(child);
      }
    }
    return child;
  });


  return (
    <Collapsible.Root
      open={open}
      className={clsx(
        "menu-accordion relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-300",
        className && className
      )}
    >
      <Collapsible.Content>{modifiedChildren}</Collapsible.Content>
    </Collapsible.Root>
  );
};

const MenuSub = memo(MenuSubComponent);
export { MenuSub };
