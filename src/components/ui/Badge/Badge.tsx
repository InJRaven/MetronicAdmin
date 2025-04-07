import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("badge", {
  variants: {
    variant: {
      Default: "",
      Outline: "badge-outline",
    },
    type: {
      Default: "",
      Pill: "badge-pill",
    },
    size: {
      "Extra Small": "badge-xs",
      Small: "badge-sm",
      Default: "",
      Large: "badge-lg",
    },
    color: {
      Default: "",
      Primary: "badge-primary",
      Success: "badge-success",
      Danger: "badge-danger",
      Warning: "badge-warning",
      Info: "badge-info",
      Dark: "badge-dark",
    },
    defaultVariants: {
      variant: "Default",
      type: "Default",
      size: "Default",
      color: "Default",
    },
  },
});

interface BadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color" | "content"> {
  type?: VariantProps<typeof badgeVariants>["type"];
  variant?: VariantProps<typeof badgeVariants>["variant"];
  size?: VariantProps<typeof badgeVariants>["size"];
  color?: VariantProps<typeof badgeVariants>["color"];
  isDot?: boolean;
  children?: string | ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { type, variant, size, color, className, children, ...props },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ type, variant, size, color }), className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";
export {Badge};
