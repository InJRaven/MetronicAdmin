import { ButtonHTMLAttributes, SVGProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("btn group", {
  variants: {
    variant: {
      primary: "btn-primary",
      mono: "btn-mono",
      destructive: "btn-destructive",
      secondary: "btn-secondary",
      outline: "btn-outline",
      dashed: "btn-dashed",
      ghost: "btn-ghost",
      dim: "btn-dim",
      foreground: "btn-foreground",
      inverse: "btn-inverse",
    },
    appearance: {
      default: "",
      ghost: "appearance-ghost",
    },
    underline: {
      solid: "btn-underline-solid",
      dashed: "btn-underline-dashed",
    },
    underlined: {
      solid: "btn-underlined-solid",
      dashed: "btn-underlined-dashed",
    },
    size: {
      lg: "btn-lg",
      md: "btn-md",
      sm: "btn-sm",
    },
    autoHeight: {
      true: "btn-auto-height",
      false: "",
    },
    shape: {
      default: "",
      circle: "rounded-full",
    },
    mode: {
      default: "btn-default",
      icon: "btn-icon",
      link: "btn-link",
      input: "btn-input",
    },
  },
  defaultVariants: {
    variant: "primary",
    mode: "default",
    size: "md",
    shape: "default",
    appearance: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  selected?: boolean;
}
const Button = ({
  className,
  selected,
  variant,
  shape,
  appearance,
  mode,
  size,
  autoHeight,
  underlined,
  underline,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        buttonVariants({
          variant,
          size,
          shape,
          appearance,
          mode,
          autoHeight,
          underlined,
          underline,
          className,
        }),
        asChild && props.disabled && "disabled"
      )}
      {...(selected && { "data-state": "open" })}
      {...props}
    />
  );
};

interface ButtonArrowProps extends SVGProps<SVGSVGElement> {
  icon?: LucideIcon;
}

const ButtonArrow = ({
  icon: Icon = ChevronDown,
  className,
  ...props
}: ButtonArrowProps) => {
  return (
    <Icon
      data-slot="button-arrow"
      className={cn("ms-auto -me-[0.4rem]", className)}
      {...props}
    />
  );
};

export { Button, ButtonArrow };
