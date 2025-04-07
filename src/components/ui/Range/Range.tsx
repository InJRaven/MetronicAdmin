import { cn } from "@/lib/utils";
import {
  CSSProperties,
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from "react";

interface RangeProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value?: number;
  min?: number;
  max?: number;
}
const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ className, value = 0, min = 0, max = 100, ...props }, ref) => {
    const percentage = Math.max(
      0,
      Math.min(100, ((value - min) / (max - min)) * 100)
    );

    return (
      <input
        ref={ref}
        value={value}
        min={min}
        max={max}
        step={0.1}
        className={cn("range", className)}
        type="range"
        style={
          {
            "--value": `${percentage}%`,
          } as CSSProperties
        }
        {...props}
      />
    );
  }
);
Range.displayName = "Range";
export { Range };
