import { ComponentProps, createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from "@radix-ui/react-accordion";
import { ChevronDown, Plus } from "lucide-react";

const accordionVariants = cva("accordion", {
  variants: {
    variant: {
      default: "",
      outline: "accordion-outline",
      solid: "accordion-solid",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const accordionTriggerVariants = cva(
  "accordion-trigger transition-all [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      variant: {
        default: "",
        outline: "",
        solid: "",
      },
      indicator: {
        arrow: "",
        plus: "[&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      indicator: "arrow",
    },
  }
);
const accordionContentVariants = cva(
  "accordion-content transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  {
    variants: {
      variant: {
        default: "",
        outline: "",
        solid: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type AccordionPropsType = {
  variant?: "default" | "outline" | "solid";
  indicator?: "arrow" | "plus" | "none";
};

const AccordionContext = createContext<AccordionPropsType>({
  variant: "default",
  indicator: "arrow",
});
const Accordion = (
  props: ComponentProps<typeof Root> &
    VariantProps<typeof accordionVariants> & {
      indicator?: "arrow" | "plus";
    }
) => {
  const {
    className,
    variant = "default",
    indicator = "arrow",
    children,
    ...rest
  } = props;
  return (
    <AccordionContext.Provider
      value={{
        variant: variant || "default",
        indicator,
      }}
    >
      <Root
        data-slot="accordion"
        className={cn(accordionVariants({ variant }), className)}
        {...rest}
      >
        {children}
      </Root>
    </AccordionContext.Provider>
  );
};

const AccordionItem = (props: React.ComponentProps<typeof Item>) => {
  const { className, children, ...rest } = props;

  return (
    <Item
      data-slot="accordion-item"
      className={cn("accordion-item", className)}
      {...rest}
    >
      {children}
    </Item>
  );
};

const AccordionTrigger = (props: React.ComponentProps<typeof Trigger>) => {
  const { className, children, ...rest } = props;
  const { variant, indicator } = useContext(AccordionContext);

  return (
    <Header className="flex">
      <Trigger
        data-slot="accordion-trigger"
        className={cn(
          accordionTriggerVariants({ variant, indicator }),
          className
        )}
        {...rest}
      >
        {children}
        {indicator === "plus" && (
          <Plus
            className="size-[2rem] shrink-0 transition-transform duration-200"
            strokeWidth={1}
          />
        )}
        {indicator === "arrow" && (
          <ChevronDown
            className="size-[2rem] shrink-0 transition-transform duration-200"
            strokeWidth={1}
          />
        )}
      </Trigger>
    </Header>
  );
};

const AccordionContent = (props: React.ComponentProps<typeof Content>) => {
  const { className, children, ...rest } = props;
  const { variant } = useContext(AccordionContext);

  return (
    <Content
      data-slot="accordion-content"
      className={cn(accordionContentVariants({ variant }), className)}
      {...rest}
    >
      <div className={cn("pb-[2rem] pt-0", className)}>{children}</div>
    </Content>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
