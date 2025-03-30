import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("btn", {
  variants: {
    isIcon: {
      true: "btn-icon",
    },
    variant: {
      Default: "",
      Outline: "btn-outline",
      Clear: "btn-clear",
      Subtle: "btn-subtle",
      Link: "btn-link",
    },
    size: {
      "Extra Small": "btn-xs",
      Default: "",
      Small: "btn-sm",
      Large: "btn-lg",
    },
    color: {
      Default: "",
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
    isIcon: false,
    variant: "Default",
    size: "Default",
    color: "Default",
  },
});

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  asChild?: boolean;
  isIcon?: boolean;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  color?: VariantProps<typeof buttonVariants>["color"];
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild, variant, size, color, isIcon = false, className, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ isIcon, variant, size, color }),
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };
