import { useState } from "react";

import { ProgressBar, Textarea } from "@ui";

const Home = () => {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <Textarea state="Default" placeholder="Textarea" />
      <Textarea state="Label" placeholder="Label Mode" label="Label TextArea" />

      <ProgressBar size="Medium" colors="Dark" max={100} />
    </>
  );
};
export default Home;
