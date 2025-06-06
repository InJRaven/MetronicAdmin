import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const badgeVariants = cva("badge", {
  variants: {
    variant: {
      primary: "badge-primary",
      secondary: "badge-secondary",
      success: "badge-success",
      warning: "badge-warning",
      info: "badge-info",
      mono: "badge-mono",
      destructive: "badge-destructive",
    },
    appearance: {
      solid: "appearance-solid",
      outline: "appearance-outline",
      light: "appearance-light",
      stroke: "appearance-stroke",
      ghost: "appearance-ghost",
    },
    disabled: {
      true: "disabled",
      false: "",
    },
    size: {
      lg: "badge-lg",
      md: "badge-md",
      sm: "badge-sm",
      xs: "badge-xs",
    },

    shape: {
      default: "",
      circle: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "secondary",
    appearance: "solid",
    size: "md",
  },
});

const badgeButtonVariants = cva("badge-button transition-all", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
  dotClassName?: string;
  disabled?: boolean;
}

interface BadgeButtonProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeButtonVariants> {
  asChild?: boolean;
}

type BadgeDotProps = HTMLAttributes<HTMLSpanElement>;

const Badge = ({
  className,
  variant,
  size,
  appearance,
  shape,
  asChild = false,
  disabled,
  ...props
}: BadgeProps) => {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ variant, size, appearance, shape, disabled }),
        className
      )}
      {...props}
    />
  );
};

const BadgeButton = ({
  className,
  variant,
  asChild = false,
  ...props
}: BadgeButtonProps) => {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      data-slot="badge-button"
      className={cn(badgeButtonVariants({ variant, className }))}
      role="button"
      {...props}
    />
  );
};

const BadgeDot = ({ className, ...props }: BadgeDotProps) => {
  return (
    <span
      data-slot="badge-dot"
      className={cn(
        "size-[0.6rem] rounded-full bg-[currentColor] opacity-75 leading-none",
        className
      )}
      {...props}
    />
  );
};
export { Badge, BadgeButton, BadgeDot };
