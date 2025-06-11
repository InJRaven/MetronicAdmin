import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { HTMLAttributes } from "react";

const alertVariants = cva("alert group-[.toaster]:w-(--width)", {
  variants: {
    variant: {
      secondary: "alert-secondary",
      primary: "alert-primary",
      destructive: "alert-destructive",
      success: "alert-success",
      info: "alert-info",
      mono: "alert-mono",
      warning: "alert-warning",
    },
    icon: {
      primary: "icon-primary",
      destructive: "icon-destructive",
      success: "icon-success",
      info: "icon-info",
      warning: "icon-warning",
    },
    appearance: {
      solid: "appearance-solid",
      outline: "appearance-outline",
      light: "appearance-light",
      stroke: "appearance-stroke",
    },
    size: {
      lg: "alert-lg",
      md: "alert-md",
      sm: "alert-sm",
    },
  },
  defaultVariants: {
    variant: "secondary",
    appearance: "solid",
    size: "md",
  },
});
interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  close?: boolean;
  onClose?: () => void;
}
interface AlertIconProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = ({
  className,
  variant,
  size,
  icon,
  appearance,
  close = false,
  onClose,
  children,
  ...props
}: AlertProps) => {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(
        alertVariants({ variant, size, icon, appearance }),
        className
      )}
      {...props}
    >
      {children}
      {close && (
        <Button
          size="sm"
          variant="inverse"
          mode="icon"
          onClick={onClose}
          aria-label="Dismiss"
          data-alert-close="true"
          className={cn("group shrink-0 !size-[1.6rem]")}
        >
          <X className="!opacity-60 group-hover:!opacity-100 !size-[1.6rem] transition-opacity" />
        </Button>
      )}
    </div>
  );
};

const AlertTitle = ({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <div
      data-slot="alert-title"
      className={cn("grow tracking-tight", className)}
      {...props}
    />
  );
};

const AlertIcon = ({ children, className, ...props }: AlertIconProps) => {
  return (
    <div
      data-slot="alert-icon"
      className={cn("shrink-0", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const AlertToolbar = ({ children, className, ...props }: AlertIconProps) => {
  return (
    <div data-slot="alert-toolbar" className={cn(className)} {...props}>
      {children}
    </div>
  );
};

const AlertDescription = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <div
      data-slot="alert-description"
      className={cn("text-sm [&_p]:leading-relaxed [&_p]:mb-2", className)}
      {...props}
    />
  );
};

const AlertContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <div
      data-slot="alert-content"
      className={cn("alert-content", className)}
      {...props}
    />
  );
};
export {
  Alert,
  AlertTitle,
  AlertIcon,
  AlertToolbar,
  AlertDescription,
  AlertContent,
};
