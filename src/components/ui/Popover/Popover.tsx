import { Root, Trigger, Content, Portal } from "@radix-ui/react-popover";
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

const PopoverContent = forwardRef<
  ComponentRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => {
  return (
    <Portal>
      <Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        {...props}
        className={cn(className)}
      />
    </Portal>
  );
});

const Popover = {
  Root: Root,
  Trigger: Trigger,
  Content: PopoverContent,
};
export default Popover;
