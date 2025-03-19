import { Badge, Tooltip } from "@/components/ui";
import { Button, Icons, ProgressBar } from "@/components/ui/Base";
import { Switch } from "@/components/ui/Forms";
import { useState } from "react";
import { classNames } from "classnames";

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

      {sizes.map((size) => {
        return (
          <div key={size} className="inline-flex items-center gap-5">
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
