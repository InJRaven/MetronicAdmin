import { forwardRef, InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const radioVariants = cva("radio", {
  variants: {
    size: {
      Small: "radio-sm",
      Default: "",
      Large: "radio-lg",
    },
  },
});

interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: VariantProps<typeof radioVariants>["size"];
}
const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, size, ...props }, ref) => (
    <input
      ref={ref}
      type="radio"
      className={cn(radioVariants({ size }), className)}
      {...props}
    />
  )
);

Radio.displayName = "Radio";
export { Radio };
