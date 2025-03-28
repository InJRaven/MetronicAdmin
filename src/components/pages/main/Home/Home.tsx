import {
  Container,
  Accordion,
  AccordionItem,
  FileInput,
  Range,
  Icons,
  Select,
} from "@/components/ui";

const Home = () => {
  return (
    <div className="flex">
      <Container.Fixed>
        
        <Select.Root>
          <Select.Trigger size='Small' >
            
            
            <Select.Value placeholder='Select One...' />
            </Select.Trigger>

          <Select.Content position="popper" sideOffset={4} alignOffset={0}>
            <Select.Group>
              <Select.Item value="test">
                <span>Test</span>
              </Select.Item>
              <Select.Item value="test">
                <span>Test</span>
              </Select.Item>
              <Select.Item value="random">
                <span>Random</span>
              </Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
        {/* <select className="select select-sm" name="" id="">
          <option>Test</option>
          <option>Test</option>
          <option>Test</option>
        </select> */}
      </Container.Fixed>
    </div>
  );
};
export default Home;
