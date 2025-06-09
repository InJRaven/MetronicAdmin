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

        <div className="w-[500px] text-foreground text-sm rounded-lg border border-border p-4">
          Crudhunt is a free toolkit offering complete CRUD (Create, Read,
          Update, Delete) examples for real-world projects use cases.
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleContent>
              Unlike libraries that address specific parts of CRUD, Crudhunt
              delivers end-to-end solutions, making it an essential tool for
              building the core functionality of any application.
            </CollapsibleContent>
            <div className="text-end underline">
              <CollapsibleTrigger asChild>
                <Button underlined="dashed" mode="link" size="sm">
                  {isOpen ? "Show less" : "Show more"}
                </Button>
              </CollapsibleTrigger>
            </div>
          </Collapsible>
        </div>
      </Container.Fixed>
    </div>
  );
};
export { Dashboard };
