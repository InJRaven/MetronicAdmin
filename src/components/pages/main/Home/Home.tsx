import { Badge } from "@/components/ui";
import { Button, Icons, ProgressBar } from "@/components/ui/Base";
import { Switch } from "@/components/ui/Forms";
import { useState } from "react";

const Home = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
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
  return (
    <>
      <div className="w-fit">
        <Switch
          size="Small"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          label="Switch Component"
        />
      </div>
      <div>
        <span className="badge badge-lg badge-outline badge-success badge-pill">
          <span className="badge badge-dot"></span>Badge
        </span>
      </div>

      {sizes.map((size) => {
        return (
          <div className="inline-flex items-center gap-5">
            {colors.map((color) => (
              <Badge
                key={`${size}-${color}`}
                color={color} // Ép kiểu nếu cần
                size={size} // Ép kiểu nếu cần
                content="Badge"
              />
            ))}
          </div>
        );
      })}

      {sizes.map((size) => {
        return (
          <div className="inline-flex items-center gap-5">
            {colors.map((color) => (
              <Badge
                type="Pill"
                key={`${size}-${color}`}
                color={color} // Ép kiểu nếu cần
                size={size} // Ép kiểu nếu cần
                content="Badge"
                isDot
              />
            ))}
          </div>
        );
      })}
      <ProgressBar size="Medium" colors="Primary" progress={30} max={100} />
    </>
  );
};
export default Home;
