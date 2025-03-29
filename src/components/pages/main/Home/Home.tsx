import {
  Container,
  Accordion,
  AccordionItem,
  FileInput,
  Range,
  Icons,
  Select,
  Input,
  Switch,
  Textarea,
} from "@/components/ui";

const Home = () => {
  return (
    <div className="flex">
      <Container.Fixed>
        <div className="input input-sm">
          <input type="text" name="" id="" />
        </div>

        <div className="flex">
          <Switch label="test" size={"Large"} />
        </div>
        <Textarea size={"Large"} readOnly placeholder="test" />
        <Input size="small" />
      </Container.Fixed>
    </div>
  );
};
export default Home;
