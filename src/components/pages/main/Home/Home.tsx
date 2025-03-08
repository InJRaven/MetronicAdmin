import { ChangeEvent, useState } from "react";

import { DatePicker, TimePicker, Rating, ProgressBar, Icons, InputFiled } from "@ui";




const Home = () => {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <InputFiled
        size="Large"
        variant="Outline"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        type="text"
        placeholder={"test"}
        iconLeft ={<Icons name='Xiaomi' type='Filled' className="text-b-20-20"/>}
        required
      />
      <ProgressBar size="Medium" colors="Dark" max={100} />
    </>
  );
};
export default Home;
