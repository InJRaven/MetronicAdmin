import { ComponentProps, ComponentPropsWithoutRef } from "react";
import {
  Root,
  CollapsibleTrigger as Trigger,
  CollapsibleContent as Content,
} from "@radix-ui/react-collapsible";
import { cn } from "@/lib/utils";

const Collapsible = ({ ...props }: ComponentProps<typeof Root>) => {
  return <Root data-slot="collapsible" {...props} />;
};

const CollapsibleTrigger = ({ ...props }: ComponentProps<typeof Trigger>) => {
  return <Trigger data-slot="collapsible-trigger" {...props} />;
};
const CollapsibleContent = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Content>) => {
  return (
    <Content
      className={cn(
        "overflow-hidden transition-transform data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
        className
      )}
      {...props}
    >
      {children}
    </Content>
  );
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
