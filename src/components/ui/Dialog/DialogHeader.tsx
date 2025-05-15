import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
const DialogHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("dialog-header space-x-[0.8rem] sm:text-left", className)}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";
export { DialogHeader };
