import { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Root, Indicator } from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";

import { Check, Minus } from "lucide-react";

const checkboxVariants = cva("checkbox group peer", {
  variants: {
    variant: {
      primary: "checkbox-primary",
      mono: "checkbox-mono",
    },
    size: {
      sm: "checkbox-sm",
      md: "checkbox-md",
      lg: "checkbox-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface CheckboxProps
  extends ComponentPropsWithoutRef<typeof Root>,
    VariantProps<typeof checkboxVariants> {}
const Checkbox = ({ className, variant, size, ...props }: CheckboxProps) => {
  return (
    <Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ variant, size }), className)}
      {...props}
    >
      <Indicator className="checkbox-indicator">
        <Check className="group-data-[state=indeterminate]:hidden" />
        <Minus className="hidden group-data-[state=indeterminate]:block" />
      </Indicator>
    </Root>
  );
};

export { Checkbox };
