import { ComponentPropsWithoutRef, Ref } from "react";
import {
  Root,
  Viewport,
  Corner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
} from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";

function ScrollArea({
  className,
  viewportClassName,
  children,
  viewportRef,
  ...props
}: ComponentPropsWithoutRef<typeof Root> & {
  viewportRef?: Ref<HTMLDivElement>;
  viewportClassName?: string;
}) {
  return (
    <Root
      data-slot="scroll-area"
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <Viewport
        ref={viewportRef}
        className={cn("h-full w-full rounded-[inherit]", viewportClassName)}
      >
        {children}
      </Viewport>
      <ScrollBar />
      <Corner />
    </Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>) {
  return (
    <ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" &&
          "h-full w-2 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" &&
          "h-2 flex-col border-t border-t-transparent p-[1px]",
        className
      )}
      {...props}
    >
      <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    </ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };
