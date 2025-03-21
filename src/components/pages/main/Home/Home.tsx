import { Badge, Avatar, Card, Collapse, Button } from "@/components/ui";
import { ProgressBar } from "@/components/ui/Base";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <Collapse.Root className="flex items-center flex-col w-full">
        <Collapse.Trigger asChild>
          <Button size='Default'>Toogle Content</Button>
        </Collapse.Trigger>
        <Collapse.Content className="w-full">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Test Collpase</h3>
            </div>
          </div>
        </Collapse.Content>
      </Collapse.Root>
      <Card.Root className="card-grid card-rounded ">
        <Card.Header>
          <Card.Title> Test Card</Card.Title>
          <Card.Description>Hello</Card.Description>
        </Card.Header>
        <Card.Body>
          <table className="table">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
              </tr>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
              </tr>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
        <Card.Footer className="justify-center">Card Footer</Card.Footer>
      </Card.Root>
      <ProgressBar size="Medium" colors="Primary" progress={30} max={100} />
    </>
  );
};
export default Home;
