import { Icons, ProgressBar } from "@/components/ui/Base";
import { Switch } from "@/components/ui/Forms";
import { useState } from "react";

const Home = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <>
      <div className="inline-flex gap-5">
        <button className="btn btn-icon btn-xs bg-primary">
          <Icons name="Abstract 10" type="Filled" />
        </button>

        <button className="btn btn-icon btn-sm bg-primary">
          <Icons name="Abstract 10" type="Filled" />
        </button>
        <button className="btn btn-icon bg-primary">
          <Icons name="Abstract 10" type="Filled" />
        </button>
        <button className="btn btn-icon btn-lg bg-primary">
          <Icons name="Abstract 10" type="Filled" />
        </button>
      </div>

      {/* <Textarea state="Default" disabled/>
      <InputFileds state="Default" disabled/>
      <InputFileds size="Small" type="number" state="Label" label="test"/>
      <InputFileds state="Label + Icon" label="label + icon" iconLeft={<Icons name="Abstract 12" type="Duotone"/>}/>
      <Radio  size="Default" label="Radion Button"/>
      <Radio size="Small" label="Radion Button"/>
      <Radio size="Large" label="Radion Button"/>

      <CheckBox size="Default" label="CheckBox Button"/>
      <CheckBox size="Small" label="CheckBox Button"/>
      <CheckBox size="Large" label="CheckBox Button"/> */}
      <div className="w-fit">
        <Switch
          size="Small"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          label="Switch Component"
        />
      </div>

      <ProgressBar size="Medium" colors="Primary" progress={30} max={100} />
    </>
  );
};
export default Home;
