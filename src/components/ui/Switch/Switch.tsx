import { cn } from "@/lib/utils";
import { Root, Thumb } from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import {
  ComponentPropsWithoutRef,
  ComponentRef,
  createContext,
  forwardRef,
  useContext,
} from "react";

const SwitchContext = createContext<{ permanent: boolean }>({
  permanent: false,
});

const useSwitchContext = () => {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error("SwitchIndicator must be used within a Switch component");
  }
  return context;
};
const switchVariants = cva(`switch peer`, {
  variants: {
    shape: {
      pill: "pill",
      square: "square",
    },
    size: {
      sm: "switch-sm",
      md: "switch-md",
      lg: "switch-lg",
      xl: "switch-xl",
    },
    variant: {
      primary: "switch-primary",
      mono: "switch-mono",
    },
    permanent: {
      true: "permanent",
      false: "",
    },
  },
  defaultVariants: {
    shape: "pill",
    permanent: false,
    size: "md",
    variant: "primary",
  },
});

const switchThumbVariants = cva("switch-thumb transition-transform", {
  variants: {
    shape: {
      pill: "pill",
      square: "square",
    },
  },

  defaultVariants: {
    shape: "pill",
  },
});

const switchIndicatorVariants = cva("switch-indicator", {
  variants: {
    state: {
      on: "on",
      off: "off",
    },
  },

  defaultVariants: {
    state: "off",
  },
});

const SwitchWrapper = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="switch-wrapper"
      className={cn("relative inline-flex items-center", className)}
      {...props}
    >
      {children}
    </div>
  );
};
const Switch = ({
  className,
  thumbClassName = "",
  variant,
  shape,
  size,
  ...props
}: ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof switchVariants> & { thumbClassName?: string }) => {
  const context = useSwitchContext();
  const permanent = context?.permanent ?? false;
  return (
    <Root
      data-slot="switch"
      className={cn(
        switchVariants({ shape, variant, size, permanent }),
        className
      )}
      {...props}
    >
      <Thumb className={cn(switchThumbVariants({ shape }), thumbClassName)} />
    </Root>
  );
};

const SwitchIndicator = ({
  className,
  state,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof switchIndicatorVariants>) => {
  return (
    <span
      data-slot="switch-indicator"
      className={cn(switchIndicatorVariants({ state }), className)}
      {...props}
    />
  );
};

export { SwitchWrapper, Switch, SwitchIndicator };
