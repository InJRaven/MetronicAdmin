import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import { Root, Indicator } from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";


const progressVariants = cva("progress", {
  variants: {
    size: {
      Small: "progress-sm",
      Default: "",
      Large: "progress-lg",
    },
    color: {
      Default: "",
      Primary: "progress-primary",
      Success: "progress-success",
      Danger: "progress-danger",
      Warning: "progress-warning",
      Info: "progress-info",
      Dark: "progress-dark",
    },
  },
  defaultVariants: {
    size: "Default",
    color: "Default",
  },
});

interface ProgresspProps
  extends Omit<ComponentPropsWithoutRef<typeof Root>, "color"> {
  color?: VariantProps<typeof progressVariants>["color"];
  size?: VariantProps<typeof progressVariants>["size"];
  value?: number;
  max?: number;
}
const Progress = forwardRef<ComponentRef<typeof Root>, ProgresspProps>(
  ({ className, value = 0, max = 100, size, color, ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(progressVariants({ size, color }), className)}
      {...props}
    >
      <Indicator
        className="progress-bar ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
        style={{
          transform: `translateX(-${
            100 - Math.min(Math.max((value / max) * 100, 0), 100)
          }%)`,
        }}
      />
    </Root>
  )
);

export { Progress };
