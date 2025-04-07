import {
  Children,
  cloneElement,
  isValidElement,
  memo,
  ReactNode,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { IAccordionItemProps } from "./AccordionItem";

interface IAccordionProps {
  className?: string; // Optional className for custom styling
  children: ReactNode;
  allowMultiple?: boolean; // Allow multiple items to be open at the same time
}

const AccordionComponent = ({
  className,
  children,
  allowMultiple,
}: IAccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const handleItemClick = (index: number) => {
    setOpenIndexes((prev) => {
      const newSet = new Set(prev);
      if (!allowMultiple) return prev.has(index) ? new Set() : new Set([index]);


      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      prev.has(index) ? newSet.delete(index) : newSet.add(index);
      return newSet;
    });
  };

  const modifiedChildren = Children.map(children, (child, index) => {
    if (isValidElement<IAccordionItemProps>(child)) {
      return cloneElement(child, {
        isOpen: allowMultiple
          ? !openIndexes.has(index) || openIndexes.size === 0
          : openIndexes.has(index),
        onClick: () => handleItemClick(index),
      });
    }
    return child;
  });
  return <div className={cn("accordion", className)}>{modifiedChildren}</div>;
};

AccordionComponent.displayName = "Accordion";
const Accordion = memo(AccordionComponent);

export { Accordion, type IAccordionProps };
