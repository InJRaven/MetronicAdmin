import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const textareaVariants = cva("textarea", {
  variants: {
    size: {
      Small: "textarea-sm",
      Default: "",
      Large: "textarea-lg",
    },
  },
  defaultVariants: {
    size: "Default",
  },
});

interface TextareaProps extends ComponentProps<"textarea"> {
  size?: VariantProps<typeof textareaVariants>["size"];
}
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(textareaVariants({ size }), className)}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
export { Textarea };
