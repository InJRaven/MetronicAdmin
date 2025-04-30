import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  useMemo,
} from "react";
import { Collapsible } from "@ui";
import { IMenuSubProps, MenuItem } from "./";
import clsx from "clsx";

const MenuSubComponent = forwardRef<HTMLDivElement | null, IMenuSubProps>(
  ({ parentId, className, disableAnimation = true, open, children }, ref) => {
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
    console.log(disableAnimation);
    return (
      <Collapsible.Root
        ref={ref}
        open={open}
        className={clsx(
          "menu-accordion before:z-10",

          className && className
        )}
      >
        <Collapsible.Content
          className={clsx(
            disableAnimation &&
              "data-[state=closed]:animate-none data-[state=open]:animate-none"
          )}
        >
          {modifiedChildren}
        </Collapsible.Content>
      </Collapsible.Root>
    );
  }
);

const MenuSub = memo(MenuSubComponent);
export { MenuSub };
