import {
  Checkbox,
  Collapse,
  Container,
  Progress,
  Radio,
  Textarea,
} from "@/components/ui";
import { Icons } from "@/components/ui/Base";
import { Switch } from "@radix-ui/react-switch";
import { useState } from "react";

const Home = () => {
  const colors = [
    "Default",
    "Primary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Dark",
  ] as const;
  const sizes = ["Small", "Default", "Large"] as const;

  const values = [25, 45, 65, 85, 95];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex">
      <Container.Fixed>
        <Collapse.Root>
          <Collapse.Trigger
            className="accordion-toggle flex justify-between w-full items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-base text-gray-900 font-medium">
              How is pricing determined for each plan ?
            </span>
            <Icons
              type="Duotone"
              name={isOpen ? "Minus" : "Plus"}
              className="text-base text-gray-900 font-medium"
            />
          </Collapse.Trigger>

          <Collapse.Content>
            <div className="text-gray-700 text-md pb-4">
              Metronic embraces flexible licensing options that empower you to
              choose the perfect fit for your project's needs and budget.
              Understanding the factors influencing each plan's pricing helps
              you make an informed decision.
            </div>
          </Collapse.Content>
        </Collapse.Root>
      </Container.Fixed>
    </div>
  );
};
export default Home;
