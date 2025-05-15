import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Portal, Content, Close } from "@radix-ui/react-dialog";
import { DialogOverlay } from "./";
import { cn } from "@/lib/utils";

const dialogCotentVariants = cva(
  "dialog-content shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "dialog-side-top data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "dialog-side-bottom data-[state=closed :slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "dialog-side-left data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "dialog-side-right data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);
interface IDialogContentProps
  extends ComponentPropsWithoutRef<typeof Content>,
    VariantProps<typeof dialogCotentVariants> {
  overlay?: boolean;
  close?: boolean;
}

const DialogContent = forwardRef<
  ComponentRef<typeof Content>,
  IDialogContentProps
>(
  (
    {
      side = "right",
      overlay = true,
      close = true,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <Portal>
      {overlay && <DialogOverlay />}
      <Content
        ref={ref}
        className={cn(dialogCotentVariants({ side }), className)}
        {...props}
      >
        {children}
        {close && (
          <Close className="dialog-close ring-offset-background transition-opacity focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <span className="text-lg text-gray-900">Close</span>
          </Close>
        )}
      </Content>
    </Portal>
  )
);
DialogContent.displayName = Content.displayName;


export { DialogContent };
