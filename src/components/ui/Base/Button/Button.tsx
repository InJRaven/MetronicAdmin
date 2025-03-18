import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      Default: "",
      Outline: "btn-outline",
      Clear: "btn-clear",
      Subtle:"btn-subtle"
    },
    size: {
      "Extra Small": "btn-xs",
      Default: "",
      Small: "btn-sm",
      Large: "btn-lg",
    },
    color: {
      Primary: "btn-primary",
      Secondary: "btn-secondary",
      Success: "btn-success",
      Danger: "btn-danger",
      Warning: "btn-warning",
      Info: "btn-info",
      Dark: "btn-dark",
      Light: "btn-light",
    },
  },
  defaultVariants: {
    variant: "Default",
    size: "Default",
    color: "Primary",
  },
});

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  asChild?: boolean;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  color?: VariantProps<typeof buttonVariants>["color"];
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      variant = "Default",
      size = "Default",
      color = "Primary",
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, color }), className)}
        {...props}
      />
    );
  }
);
export default Button;
