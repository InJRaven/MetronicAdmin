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
  Input,
  InputGroup,
  InputAddon,
  InputWrapper,
  Button,
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui";
import { Euro, TicketPercent, User, X } from "lucide-react";

import { Fragment, useId, useState } from "react";

import { toast } from "sonner";

const Dashboard = () => {
  // ga('create', `G-${PUBLIC_GA}`, 'auto');

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => setIsOpen(true);
  const id = useId();
  const id1 = useId();
  const id2 = useId();
  const id3 = useId();
  const id21 = useId();
  const id22 = useId();
  const id23 = useId();
  const id31 = useId();
  const id32 = useId();
  const id33 = useId();
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

        <div className="flex w-full items-center  space-x-2.5">
          <SwitchWrapper>
            <Switch id={id} size="xl" />
            <SwitchIndicator
              state="off"
              className="-ml-[1px] text-[10px] font-medium text-muted-foreground uppercase"
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

        <div className="space-y-5 w-full gap-1.5">
          <InputGroup>
            <InputAddon>Addon</InputAddon>
            <Input type="email" placeholder="Start addon" />
          </InputGroup>
          <InputGroup>
            <Input type="email" placeholder="End addon" />
            <InputAddon>Addon</InputAddon>
          </InputGroup>
          <InputGroup>
            <InputAddon mode="icon">
              <Euro />
            </InputAddon>
            <Input type="email" placeholder="Start icon addon" />
          </InputGroup>
          <InputGroup>
            <Input type="email" placeholder="End icon addon" />
            <InputAddon mode="icon">
              <TicketPercent />
            </InputAddon>
          </InputGroup>
        </div>

        <div className="space-y-5 w-80">
          <InputWrapper>
            <Euro />
            <Input type="email" placeholder="Start icon" />
          </InputWrapper>
          <InputWrapper>
            <Input type="email" placeholder="End icon" />
            <TicketPercent />
          </InputWrapper>
          <InputWrapper>
            <Button
              size="sm"
              variant="dim"
              mode="icon"
              className="size-5 -ms-0.5"
            >
              <User />
            </Button>
            <Input type="email" placeholder="Start clickble icon" />
          </InputWrapper>
          <InputWrapper>
            <Input type="email" placeholder="End clickble icon" />
            <Button
              size="sm"
              variant="dim"
              mode="icon"
              className="size-5 -me-0.5"
            >
              <X />
            </Button>
          </InputWrapper>
        </div>

        <div className="flex flex-wrap gap-10">
          <RadioGroup defaultValue="intermediate" size="sm">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="beginner" id={id1} />
              <Label htmlFor={id1} variant="secondary">
                Small 1
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="intermediate" id={id2} />
              <Label htmlFor={id2} variant="secondary">
                Small 2
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="advanced" id={id3} />
              <Label htmlFor={id3} variant="secondary">
                Small 3
              </Label>
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="intermediate">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="beginner" id={id21} />
              <Label htmlFor={id21} variant="secondary">
                Medium 1
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="intermediate" id={id22} />
              <Label htmlFor={id22} variant="secondary">
                Medium 2
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="advanced" id={id23} />
              <Label htmlFor={id23} variant="secondary">
                Medium 3
              </Label>
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="intermediate" size="lg">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="beginner" id={id31} />
              <Label htmlFor={id31} variant="secondary">
                Large 1
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="intermediate" id={id32} />
              <Label htmlFor={id32} variant="secondary">
                Large 2
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="advanced" id={id33} />
              <Label htmlFor={id33} variant="secondary">
                Large 3
              </Label>
            </div>
          </RadioGroup>
        </div>

        <RadioGroup defaultValue="intermediate">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id={id1} />
            <Label htmlFor={id1} variant="secondary">
              Default
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="disabled" id={id2} disabled />
            <Label htmlFor={id2} variant="secondary">
              Disabled
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="another" id={id3} />
            <Label htmlFor={id3} variant="secondary">
              Another
            </Label>
          </div>
        </RadioGroup>
      </Container.Fixed>
    </div>
  );
};
export { Dashboard };
