import { CheckBox, InputFileds, Radio, Textarea } from "@ui/Forms";

import { Icons, ProgressBar} from "@ui";


const Home = () => {

  return (
    <>
      <Textarea state="Default"/>
      <InputFileds state="Default"/>
      <InputFileds size="Small" type="number" state="Label" label="test"/>
      <InputFileds state="Label + Icon" label="label + icon" iconLeft={<Icons name="Abstract 12" type="Duotone"/>}/>
      <Radio size="Default" label="Radion Button"/>
      <Radio size="Small" label="Radion Button"/>
      <Radio size="Large" label="Radion Button"/>

      <CheckBox size="Default" label="CheckBox Button"/>
      <CheckBox size="Small" label="CheckBox Button"/>
      <CheckBox size="Large" label="CheckBox Button"/>
      <ProgressBar size="Medium" colors="Primary" progress={30} max={100} />

      
    </>
  );
};
export default Home;
