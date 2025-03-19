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
  extends Omit<HTMLAttributes<HTMLDivElement>, "color" | "content"> {
  type?: VariantProps<typeof badgeVariants>["type"];
  variant?: VariantProps<typeof badgeVariants>["variant"];
  size?: VariantProps<typeof badgeVariants>["size"];
  color?: VariantProps<typeof badgeVariants>["color"];
  isDot?: boolean;
  content?: string | ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ type, variant, size, color, isDot, className, content, ...props }) => {
    return (
      <div
        className={cn(badgeVariants({ type, variant, size, color }), className)}
        {...props}
      >
        {isDot && <span className="badge badge-dot"></span>}
        {content}
      </div>
    );
  }
);
Badge.displayName = "Badge";
export default Badge;
