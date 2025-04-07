import { forwardRef, InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const fileInputVariants = cva("file-input", {
  variants: {
    size: {
      Small: "file-input-sm",
      Default: "",
      Large: "file-input-lg",
    },
  },
  defaultVariants: {
    size: "Default",
  },
});
interface FileInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: VariantProps<typeof fileInputVariants>["size"];
}
const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="file"
        className={cn(fileInputVariants({ size }), className)}
        {...props}
      />
    );
  }
);

export {FileInput}
