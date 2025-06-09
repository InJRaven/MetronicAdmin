import {
  Container,
  Button,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Badge,
  BadgeDot,
  BadgeButton,
  Checkbox,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Calendar,
} from "@/components/ui";

import { Fragment, useState } from "react";

import { toast } from "sonner";

const Dashboard = () => {
  // ga('create', `G-${PUBLIC_GA}`, 'auto');

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => setIsOpen(true);

  return (
    <div className="flex">
      <Container.Fixed>
        <button
          aria-invalid={true}
          className="btn btn-xs btn-mono"
          onClick={() => toast.info("Hello")}
        >
          Show Notification
        </button>

        <button
          className="btn btn-default bac btn-primary"
          onClick={handleClick}
        >
          Modal
        </button>

        <Accordion type="multiple" indicator="plus">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day return policy. Please keep your receipt and
              return in original packaging.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day return policy. Please keep your receipt and
              return in original packaging.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day return policy. Please keep your receipt and
              return in original packaging.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <button data-invalid className="btn btn-input">
          Test Button
        </button>

        <label htmlFor="" className="flex items-center">
          <Checkbox variant="primary" size="lg" checked="indeterminate" />{" "}
          checkbox
        </label>

        <div className="w-[500px]">
          
          <Calendar mode="range" numberOfMonths={2}/>
        </div>
      </Container.Fixed>
    </div>
  );
};
export { Dashboard };
