import {
  ComponentPropsWithoutRef,
  ComponentRef,
  forwardRef,
  HTMLAttributes,
} from "react";
import {
  Root,
  Trigger,
  Close,
  Portal,
  Content,
  Overlay,
  Title,
  Description,
} from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const DialogOverLay = forwardRef<
  ComponentRef<typeof Overlay>,
  ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay
    className={cn(
      "dialog-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
DialogOverLay.displayName = Overlay.displayName;

const dialogCotentVariants = cva(
  "dialog-content shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "dialog-side-top",
        bottom: "dialog-side-bottom",
        left: "dialog-side-left sm:max-w-sm",
        right: "dialog-side-right sm:max-w-sm",
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
      {overlay && <DialogOverLay />}
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

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "dialog-footer sm:flex-row sm:justify-end sm:space-x-[0.8rem]",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = forwardRef<
  ComponentRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title ref={ref} className={cn("dialog-title", className)} {...props} />
));
DialogTitle.displayName = Title.displayName;

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

const Dialog = {
  Root: Root,
  Trigger: Trigger,
  Close: Close,
  Portal: Portal,
  Overlay: DialogOverLay,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
};
export { Dialog };
