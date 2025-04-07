import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Root, Indicator } from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";


const checkboxVariants = cva("radix-checkbox", {
  variants: {
    size: {
      Small: "radix-checkbox-sm",
      Default: "",
      Large: "radix-checkbox-lg",
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

const Checkbox = forwardRef<ComponentRef<typeof Root>, CheckboxProps>(
  ({className, size, ...props }, ref) => {
    return(
    <Root
      ref={ref}
      className={cn(checkboxVariants({ size }), className)}
      {...props}
    >
      <Indicator />
    </Root>
  )}

);



export { Checkbox };
