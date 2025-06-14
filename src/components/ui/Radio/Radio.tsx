import { ComponentPropsWithoutRef, createContext, useContext } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Root, Item, Indicator } from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";

type RadioVariant = "primary" | "mono";
type RadioSize = "sm" | "md" | "lg";

const radioGroupVariants = cva("radio-group", {
  variants: {
    variant: {
      primary: "",
      mono: "",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const radioItemVariants = cva("radio peer", {
  variants: {
    variant: { primary: "radio-primary", mono: "radio-mono" },
    size: { sm: "radio-sm", md: "radio-md", lg: "radio-lg" },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof Root>,
    VariantProps<typeof radioGroupVariants> {}

const RadioGroupContext = createContext<{
  variant: RadioVariant;
  size: RadioSize;
}>({ variant: "primary", size: "md" });

const RadioGroup = ({
  className,
  variant,
  size,
  ...props
}: RadioGroupProps) => {
  return (
    <RadioGroupContext.Provider
      value={{ variant: variant ?? "primary", size: size ?? "md" }}
    >
      <Root
        data-slot="radio-group"
        className={cn(radioGroupVariants({ variant, size }), className)}
        {...props}
      />
    </RadioGroupContext.Provider>
  );
};

interface RadioGroupItemProps
  extends ComponentPropsWithoutRef<typeof Item>,
    VariantProps<typeof radioItemVariants> {}

const RadioGroupItem = ({
  className,
  variant,
  size,
  ...props
}: RadioGroupItemProps) => {
  const { variant: contextVariant, size: contextSize } =
    useContext(RadioGroupContext);
  const effectiveVariant = variant ?? contextVariant;
  const effectiveSize = size ?? contextSize;

  return (
    <Item
      data-slot="radio-group-item"
      className={cn(
        radioItemVariants({ variant: effectiveVariant, size: effectiveSize }),
        className
      )}
      {...props}
    >
      <Indicator data-slot="radio-indicator" className="radio-indicator">
        <Circle className="fill-current text-current" />
      </Indicator>
    </Item>
  );
};
export { RadioGroup, RadioGroupItem };
