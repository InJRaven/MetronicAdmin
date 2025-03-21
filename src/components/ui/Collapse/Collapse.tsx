import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import {
  Root,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { cn } from "@/lib/utils";

const CollapseContent = forwardRef<
  ElementRef<typeof CollapsibleContent>,
  ComponentPropsWithoutRef<typeof CollapsibleContent>
>(({ className, children, ...props }, ref) => (
  <CollapsibleContent
    ref={ref}
    className={cn("overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down", className)}
    {...props}
  >
    <div className="mt-[1.5rem]">{children}</div>
  </CollapsibleContent>
));
const Collapse = {
  Root: Root,
  Trigger: CollapsibleTrigger,
  Content: CollapseContent,
};

export default Collapse;
