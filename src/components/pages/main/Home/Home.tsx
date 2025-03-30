import {
  Container,
  Accordion,
  AccordionItem,
  FileInput,
  Range,
  Icons,
  Select,
  Input,
  Switch,
  Textarea,
  Avatar,
  Button,
} from "@/components/ui";

const Home = () => {
  const colors = [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Dark",
    "Light",
  ] as const;
  const sizes = ["Extra Small", "Small", "Default", "Large"] as const;

  const variants = ["Default", "Outline", "Clear", "Subtle"] as const;
  return (
    <div className="flex">
      <Container.Fixed>
        
      </Container.Fixed>
    </div>
  );
};
export default Home;
