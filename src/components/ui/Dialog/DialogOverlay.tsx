import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { Overlay } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const DialogOverlay = forwardRef<
  ComponentRef<typeof Overlay>,
  ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay
    ref={ref}
    className={cn(
      "dialog-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = Overlay.displayName;

export { DialogOverlay };
