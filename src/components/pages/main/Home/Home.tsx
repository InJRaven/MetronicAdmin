import {
  Container,
  Accordion,
  AccordionItem,

} from "@/components/ui";


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

  return (
    <div className="flex">
      <Container.Fixed>
        

        <Accordion allowMultiple >
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
