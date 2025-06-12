import {
  Container,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Checkbox,
  Calendar,
  Switch,
  Label,
  SwitchWrapper,
  SwitchIndicator,
} from "@/components/ui";

import { Fragment, useId, useState } from "react";

import { toast } from "sonner";

const Dashboard = () => {
  // ga('create', `G-${PUBLIC_GA}`, 'auto');

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => setIsOpen(true);
  const id = useId();
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

        <div className="w-[500px] start-0">
          <Calendar mode="range" numberOfMonths={2} />
        </div>

        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex gap-6">
            <div className="flex items-center space-x-2">
              <Switch id="size-sm" size="sm" />
              <Label htmlFor="size-sm">Small</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="size-md" />
              <Label htmlFor="size-md">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="size-lg" size="lg" />
              <Label htmlFor="size-lg">Large</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="size-lg" size="xl" />
              <Label htmlFor="size-lg">XLarge</Label>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center space-x-2">
              <Switch id="compact-size-sm" size="sm" shape="square" />
              <Label htmlFor="compact-size-sm">Small</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="compact-size-md" shape="square" />
              <Label htmlFor="compact-size-md">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="compact-size-lg" size="lg" shape="square" />
              <Label htmlFor="compact-size-lg">Large</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="compact-size-lg" size="xl" shape="square" />
              <Label htmlFor="compact-size-lg">XLarge</Label>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2.5">
          <SwitchWrapper>
            <Switch id={id} size="xl" />
            <SwitchIndicator
              state="off"
              className="text-[10px] font-medium text-muted-foreground uppercase"
            >
              Off
            </SwitchIndicator>
            <SwitchIndicator
              state="on"
              className="text-[10px] font-medium text-primary-foreground uppercase"
            >
              On
            </SwitchIndicator>
          </SwitchWrapper>
          <Label htmlFor={id}>Text Indicator</Label>
        </div>
      </Container.Fixed>
    </div>
  );
};
export { Dashboard };
