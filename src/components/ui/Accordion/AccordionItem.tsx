import { Collapsible, KeenIcons } from "@/components/ui";
import { cn } from "@/lib/utils";

import { memo, ReactNode } from "react";

interface IAccordionItemProps {
  title?: string;
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
            <KeenIcons icon="Minus" style="Duotone" />
          ) : (
            <KeenIcons icon="Plus" style="Duotone" />
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
