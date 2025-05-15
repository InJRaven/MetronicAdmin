import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { Description } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const DialogDescription = forwardRef<
  ComponentRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn("dialog-description", className)}
    {...props}
  />
));
DialogDescription.displayName = Description.displayName;

export { DialogDescription };
