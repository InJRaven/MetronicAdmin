import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import {
  Root,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { cn } from "@/lib/utils";

const CollapseContent = forwardRef<
  ComponentRef<typeof CollapsibleContent>,
  ComponentPropsWithoutRef<typeof CollapsibleContent>
>(({ className, children, ...props }, ref) => (
  <CollapsibleContent
    ref={ref}
    className={cn(
      "overflow-hidden transition-transform data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
      className
    )}
    {...props}
  >
    {children}
  </CollapsibleContent>
));

CollapseContent.displayName = CollapsibleContent.displayName;
const Collapsible = {
  Root: Root,
  Trigger: CollapsibleTrigger,
  Content: CollapseContent,
};

export { Collapsible };
