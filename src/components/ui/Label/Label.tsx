import { Root } from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
const labelVariants = cva(
  "text-sm leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "font-medium",
        secondary: "font-normal",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Label = ({
  className,
  variant,
  ...props
}: ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof labelVariants>) => {
  return (
    <Root
      data-slot="label"
      className={cn(labelVariants({ variant }), className)}
      {...props}
    />
  );
};

export { Label };
