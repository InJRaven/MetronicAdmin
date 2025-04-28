import { Children, cloneElement, isValidElement, memo, useMemo } from "react";
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
  const modifiedChildren = useMemo(() => {
    return Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        if (child.type === MenuItem) {
          const modifiedProps = {
            parentId: finalParentId,
            id: `${finalParentId}-${index}`,
          };
          return cloneElement(child, modifiedProps);
        }
        return cloneElement(child);
      }
      return child;
    });
  }, [children, finalParentId]);

  return (
    <Collapsible.Root
      open={open}
      className={clsx(
        "menu-accordion relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-gray-300 before:z-10",
        className && className
      )}
    >
      <Collapsible.Content>{modifiedChildren}</Collapsible.Content>
    </Collapsible.Root>
  );
};

const MenuSub = memo(MenuSubComponent);
export { MenuSub };
