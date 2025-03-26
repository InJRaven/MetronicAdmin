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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleItemClick = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const modifiedChildren = Children.map(children, (child, index) => {
    if (isValidElement<IAccordionItemProps>(child)) {
      return cloneElement<IAccordionItemProps>(child, {
        isOpen: allowMultiple ? child.props.isOpen : openIndex === index,
        onClick: () => handleItemClick(index),
      });
    }
    return child;
  });

  return <div className={cn("accordion", className)}>{modifiedChildren}</div>;
};



const Accordion = memo(AccordionComponent);


export {Accordion , type IAccordionProps}
