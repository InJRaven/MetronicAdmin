import {
  Card,
  Collapse,
  Button,
  Separator,
  Table,
  Scrollable,
} from "@/components/ui";
import { ProgressBar } from "@/components/ui/Base";


const Home = () => {
  return (
    <>
      <Card.Root className="h-[20rem] overflow-hidden">
        <Card.Header>
          <Card.Title>Card Table</Card.Title>
        </Card.Header>
        <Scrollable.Area className="scrollable-y">
          <Card.Table>
            <Table.Root>
              <Table.Header>
                <tr>
                  <th>Customer</th>
                  <th>Order Amount</th>
                  <th>Order Date</th>
                  <th>Status</th>
                </tr>
              </Table.Header>

              <Table.Body>
                <tr>
                  <td>Customer 1</td>
                  <td>$100.00</td>
                  <td>5 Jan, 2024</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>Customer 2</td>
                  <td>$250.50</td>
                  <td>29 Feb, 2024</td>
                  <td>Shipped</td>
                </tr>
                <tr>
                  <td>Customer 3</td>
                  <td>$75.75</td>
                  <td>2 Mar, 2024</td>
                  <td>Delivered</td>
                </tr>
                <tr>
                  <td>Customer 4</td>
                  <td>$32.99</td>
                  <td>20 Feb, 2024</td>
                  <td>Cancelled</td>
                </tr>
              </Table.Body>
            </Table.Root>
          </Card.Table>
          <Scrollable.Bar className="scrollbar" orientation="vertical"/>
        </Scrollable.Area>
      </Card.Root>

      <ProgressBar size="Medium" colors="Primary" progress={30} max={100} />
    </>
  );
};
export default Home;
