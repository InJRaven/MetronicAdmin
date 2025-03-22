import { Progress } from "@/components/ui";
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
    <>
      <Switch />
      <Icons name="Abstract 10" type="Duotone"/>

     
    </>
  );
};
export default Home;
