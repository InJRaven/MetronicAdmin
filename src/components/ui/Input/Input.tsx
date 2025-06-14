import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLAttributes, InputHTMLAttributes } from "react";

const inputVariants = cva("input", {
  variants: { size: { sm: "input-sm", md: "input-md", lg: "input-lg" } },
  defaultVariants: { size: "md" },
});

const inputAddonVariants = cva("input-addon", {
  variants: {
    size: { sm: "input-addon-sm", md: "input-addon-md", lg: "input-addon-lg" },
    mode: { default: "", icon: "input-addon-icon" },
  },
  defaultVariants: {
    size: "md",
    mode: "default",
  },
});
const inputWrapperVariants = cva("input-wrapper", {
  variants: {
    size: {
      sm: "input-wrapper-sm",
      md: "input-wrapper-md",
      lg: "input-wrapper-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = ({ className, type, size, ...props }: InputProps) => {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(inputVariants({ size }), className)}
      {...props}
    />
  );
};

interface InputAddonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputAddonVariants> {}
const InputAddon = ({ className, size, mode, ...props }: InputAddonProps) => {
  return (
    <div
      data-slot="input-addon"
      className={cn(inputAddonVariants({ size, mode }), className)}
      {...props}
    />
  );
};

interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {}

const InputGroup = ({ className, ...props }: InputGroupProps) => {
  return (
    <div
      data-slot="input-group"
      className={cn("input-group", className)}
      {...props}
    />
  );
};

interface InputWrapperProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputWrapperVariants> {}

const InputWrapper = ({ className, size, ...props }: InputWrapperProps) => {
  return (
    <div
      data-slot="input-wrapper"
      className={cn(
        inputVariants({ size }),
        inputWrapperVariants({ size }),
        className
      )}
      {...props}
    />
  );
};

export {
  Input,
  InputAddon,
  InputGroup,
  InputWrapper,
  inputVariants,
  inputAddonVariants,
};
