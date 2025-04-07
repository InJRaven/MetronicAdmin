import { Avatar, Container, KeenIcons, Toaster } from "@/components/ui";
import { toast } from "sonner";
const Home = () => {
  // const colors = [
  //   "Default",
  //   "Primary",
  //   "Success",
  //   "Danger",
  //   "Warning",
  //   "Info",
  //   "Dark",
  // ] as const;
  // const sizes = ["Extra Small", "Small", "Default", "Large"] as const;

  // const variants = ["Default", "Outline", "Clear", "Subtle"] as const;

  const nofify = () => {
    toast.info("Hello");
  };
  return (
    <div className="flex">
      <Container.Fixed>
        <button className="btn btn-primary" onClick={nofify}>
          Show Toast
        </button>
        <Toaster />
        <KeenIcons
          icon={"Abstract 33"}
          style={"Outline"}
          className="text-2.5xl"
        />
      </Container.Fixed>
      
    </div>
  );
};
export default Home;
