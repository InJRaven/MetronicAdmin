import { Collapse, Icons } from "@/components/ui";
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
            <Icons name="Minus" type="Duotone" />
          ) : (
            <Icons name="Plus" type="Duotone" />
          )}
        </span>
      )
    );
  };
  return (
    <Collapse.Root open={isOpen} className={cn("accordion-item", className)}>
      <Collapse.Trigger className="accordion-toggle" onClick={onClick}>
        <span>{title}</span>
        {buildIndicator()}
      </Collapse.Trigger>
      <Collapse.Content>{children}</Collapse.Content>
    </Collapse.Root>
  );
};
AccordionItemComponent.displayName = "AccordionItem";

const AccordionItem = memo(AccordionItemComponent);

export { AccordionItem, type IAccordionItemProps };
