import { ChangeEvent, useState } from "react";

import { Icons, InputFileds, ProgressBar, Textarea } from "@ui";
import CheckBox from "@/components/ui/Forms/Checkbox";

const Home = () => {
  const [value, setValue] = useState<string>("");
  const [textareaValue, setTextareaValue] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <>
      <Textarea state="Default" placeholder="Textarea" />
      <Textarea
        state="Label"
        value={textareaValue}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setTextareaValue(e.target.value)
        }
        placeholder="Label Mode"
        label="Label TextArea"
        disabled
      />
      <InputFileds
        state="Default"
        size="Default"
        type="text"
        name="test"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        placeholder="Default mode"
      />
      <InputFileds
        state="Label"
        size="Small"
        type="text"
        name="test"
        value={value}
        label="Label Input"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        CustomLayoutClassName="!gap-[0.5rem]"
        placeholder="Label mode"
      />
      <InputFileds
        state="Label + Icon"
        size="Large"
        type="text"
        name="test"
        value={value}
        label="Label + Icon Input"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        iconLeft={<Icons name="Abstract 1" type="Duotone" />}
        iconRight={<Icons name="Abstract 1" type="Duotone" />}
        CustomLayoutClassName="!gap-[0.5rem]"
        placeholder="Label + Icon mode"
        disabled
      />

      <CheckBox size="Default" checked={isChecked} label="Test" onChange={() => setIsChecked(!isChecked)} />
      <ProgressBar size="Medium" colors="Dark" max={100} />
    </>
  );
};
export default Home;
