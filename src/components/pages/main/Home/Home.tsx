import { Container, Progress } from "@/components/ui";
import { Icons } from "@/components/ui/Base";
import { Switch } from "@/components/ui/Forms";

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
        <Switch />
        <Icons name="Abstract 10" type="Duotone" />
      </Container.Fixed>
      <Container.Fluid>
        <Switch />
        <Icons name="Abstract 10" type="Duotone" />
      </Container.Fluid>
    </div>
  );
};
export default Home;
