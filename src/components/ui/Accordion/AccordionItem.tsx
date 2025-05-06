import { Collapsible, KeenIcon } from "@/components/ui";
import { cn } from "@/lib/utils";

import { memo, ReactNode } from "react";

interface IAccordionItemProps {
  title?: string;
  asChild?: boolean;
  indicator?: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  className?: string;
  onClick?: () => void;
}
const AccordionItemComponent = ({
  title,
  indicator,
  children,
  isOpen,
  className,
  onClick,
}: IAccordionItemProps) => {
  const buildIndicator = () => {
    return (
      indicator || (
        <span className="accordion-indicator">
          {isOpen ? (
            <KeenIcon icon="minus"/>
          ) : (
            <KeenIcon icon="plus"/>
          )}
        </span>
      )
    );
  };


  return (
    <Collapsible.Root open={isOpen} className={cn("accordion-item", className)}>
      <Collapsible.Trigger className="accordion-toggle" onClick={onClick}>
        <span>{title}</span>
        {buildIndicator()}
      </Collapsible.Trigger>
      <Collapsible.Content>{children}</Collapsible.Content>
    </Collapsible.Root>
  );
};
AccordionItemComponent.displayName = "AccordionItem";

const AccordionItem = memo(AccordionItemComponent);

export { AccordionItem, type IAccordionItemProps };
