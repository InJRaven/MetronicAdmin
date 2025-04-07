import { forwardRef, InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva("input", {
  variants: {
    size: {
      default: "",
      small: "input-sm",
      large: "input-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  type?: "text" | "number" | "email" | "password" | "search" | "tel" | "url";
  size?: VariantProps<typeof inputVariants>["size"];
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", size, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
