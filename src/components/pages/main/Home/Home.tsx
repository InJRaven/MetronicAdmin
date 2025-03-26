import {
  Checkbox,
  Container,
  Collapse as CollapRadix,
  Progress,
  Radio,
  Textarea,
  Accordion,
  AccordionItem,
  Icons,
} from "@/components/ui";

import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import clsx from "clsx";

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

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenRadix, setIsOpenRadix] = useState<boolean>(false);

  return (
    <div className="flex">
      <Container.Fixed>
        <div className="accordion">
          <div
            className={clsx(
              "accordion-item border border-gray-300 rounded-xl",
              {
                active: isOpen,
              }
            )}
          >
            <button
              className="accordion-toggle p-[1.6rem]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="text-base text-gray-900 font-medium">
                How is pricing determined for each plan ?
              </span>
              {isOpen ? (
                <Icons
                  name="Minus"
                  type="Duotone"
                  className="text-base text-gray-900 font-medium"
                />
              ) : (
                <Icons
                  name="Plus"
                  type="Duotone"
                  className="text-base text-gray-900 font-medium"
                />
              )}
            </button>
            <Collapse in={isOpen} className="accordion-content border-t">
              <div className="text-gray-700 text-md p-[1.6rem]">
                Metronic embraces flexible licensing options that empower you to
                choose the perfect fit for your project's needs and budget.
                Understanding the factors influencing each plan's pricing helps
                you make an informed decision.
              </div>
            </Collapse>
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-item rounded-xl">
            <CollapRadix.Root>
              <CollapRadix.Trigger
                className="accordion-toggle p-[1.6rem]"
                onClick={() => setIsOpenRadix(!isOpenRadix)}
              >
                <span className="text-base text-gray-900 font-medium">
                  How is pricing determined for each plan ?
                </span>
                {isOpenRadix ? (
                  <Icons
                    name="Minus"
                    type="Duotone"
                    className="text-base text-gray-900 font-medium"
                  />
                ) : (
                  <Icons
                    name="Plus"
                    type="Duotone"
                    className="text-base text-gray-900 font-medium"
                  />
                )}
              </CollapRadix.Trigger>
              <CollapRadix.Content className="">
                <div className="border-t border-t-300 text-gray-700 text-md p-[1.6rem]">
                  Metronic embraces flexible licensing options that empower you
                  to choose the perfect fit for your project's needs and budget.
                  Understanding the factors influencing each plan's pricing
                  helps you make an informed decision.
                </div>
              </CollapRadix.Content>
            </CollapRadix.Root>
          </div>
        </div>

        <Accordion>
          <AccordionItem title="Test 1">
            <div className="text-gray-700 text-md">
              Metronic embraces flexible licensing options that empower you to
              choose the perfect fit for your project's needs and budget.
              Understanding the factors influencing each plan's pricing helps
              you make an informed decision.
            </div>
          </AccordionItem>
          <AccordionItem title="Test 2">
            <div className="text-gray-700 text-md">
              Metronic embraces flexible licensing options that empower you to
              choose the perfect fit for your project's needs and budget.
              Understanding the factors influencing each plan's pricing helps
              you make an informed decision.
            </div>
          </AccordionItem>
          <AccordionItem title="Test 3">
            <div className="text-gray-700 text-md">
              Metronic embraces flexible licensing options that empower you to
              choose the perfect fit for your project's needs and budget.
              Understanding the factors influencing each plan's pricing helps
              you make an informed decision.
            </div>
          </AccordionItem>
        </Accordion>
      </Container.Fixed>
    </div>
  );
};
export default Home;
