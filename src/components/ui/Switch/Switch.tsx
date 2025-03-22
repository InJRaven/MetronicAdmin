import { cn } from "@/lib/utils";
import { Root, Thumb } from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

const switchVariants = cva("switch", {
  variants: {
    size: {
      Small: "switch-sm",
      Default: "",
      Large: "switch-lg",
    },
  },
  defaultVariants: {
    size: "Default",
  },
});

interface SwitchProps
  extends Omit<ComponentPropsWithoutRef<typeof Root>, "size"> {
  size?: VariantProps<typeof switchVariants>["size"];
  htmlFor?: string;
  label?: string;
}

const Switch = forwardRef<ElementRef<typeof Root>, SwitchProps>(
  ({ className, size, htmlFor, label, ...props }, ref) => (
    <label htmlFor={htmlFor} className={cn(switchVariants({ size }))}>
      <Root className={cn(className)} {...props} ref={ref}>
        <Thumb className={cn("switch-circle")} />
      </Root>
      {label && <span className="switch-label">{label}</span>}
    </label>
  )
);

Switch.displayName = Root.displayName;

export { Switch };
