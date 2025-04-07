import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { Provider, Root, Trigger, Content } from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipContent = forwardRef<
  ComponentRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn("tooltip", className)}
    {...props}
  />
));

const Tooltip = {
  Provider: Provider,
  Root: Root,
  Trigger: Trigger,
  Content: TooltipContent,
};
export { Tooltip };
