import {
  Checkbox,
  Container,
  Progress,
  Radio,
  Textarea,
} from "@/components/ui";
import { Icons } from "@/components/ui/Base";
import { Switch } from "@radix-ui/react-switch";

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
  return (
    <div className="flex">
      <Container.Fixed>
        <Textarea placeholder="test" />
        <Textarea size="Small" placeholder="test" />
        <Textarea size="Large" placeholder="test" />

        <Checkbox />


        <Radio size="Small" />
        <Radio size="Large" />
      </Container.Fixed>
    </div>
  );
};
export default Home;
