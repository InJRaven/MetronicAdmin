import {
  Card,
  Collapse,
  Button,
  Separator,
  Table,
  Scrollable,
} from "@/components/ui";
import { ProgressBar } from "@/components/ui/Base";
import { Checkbox, Switch } from "@/components/ui/Forms";
import { useState } from "react";

const Home = () => {
  return (
    <>
      
      <Switch />
      
      <ProgressBar size="Medium" colors="Primary" progress={30} max={100} />
    </>
  );
};
export default Home;
