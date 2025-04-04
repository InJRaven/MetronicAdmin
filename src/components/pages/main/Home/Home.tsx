import { Badge, Container, Progress } from "@/components/ui";

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
  const sizes = ["Extra Small", "Small", "Default", "Large"] as const;

  const variants = ["Default", "Outline", "Clear", "Subtle"] as const;

  return (
    <div className="flex">
      <Container.Fixed>
        {colors.map(color => (
          <Progress size={"Small"} color={color} value={50}/>
        ))}
      </Container.Fixed>
    </div>
  );
};
export default Home;
