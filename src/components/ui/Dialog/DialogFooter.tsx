import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const DialogFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "dialog-footer sm:flex-row sm:justify-end sm:space-x-[0.8rem]",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";
export { DialogFooter };
