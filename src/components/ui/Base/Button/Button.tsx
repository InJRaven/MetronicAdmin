import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: '',
      outline:'btn-outline',
      clear: 'btn-clear'
    },
    size: {
      "extra small": "btn-xs",
      default:'',
      small: "btn-sm",
      large: "btn-lg",
    },
    colors:{
      
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(className)} {...props} />;
  }
);
export default Button;
