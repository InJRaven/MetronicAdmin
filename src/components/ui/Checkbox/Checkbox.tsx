import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Root, Indicator } from "@radix-ui/react-checkbox";

import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
} from "react";

const checkboxVariants = cva("checkbox", {
  variants: {
    size: {
      Small: "checkbox-sm",
      Default: "",
      Large: "checkbox-lg",
    },
  },
  defaultVariants: {
    size: "Default",
  },
});
interface CheckboxProps
  extends Omit<ComponentPropsWithoutRef<typeof Root>, "size"> {
  size?: VariantProps<typeof checkboxVariants>["size"];
}

const Checkbox = forwardRef<ElementRef<typeof Root>, CheckboxProps>(
  ({ className, size, ...props }, ref) => (
    <Root
      ref={ref}

      className={cn(checkboxVariants({ size }), className)}
      {...props}
    >
      <Indicator>
      </Indicator>
    </Root>
  )
);

export { Checkbox };
