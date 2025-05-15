import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { Title } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const DialogTitle = forwardRef<
  ComponentRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title ref={ref} className={cn("dialog-title", className)} {...props} />
));

DialogTitle.displayName = Title.displayName;
export { DialogTitle };
