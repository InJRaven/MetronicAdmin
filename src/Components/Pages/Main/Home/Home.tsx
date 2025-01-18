import { Button } from "../../../UI";

const Home = () => {
  return (
    <div className="w-full">
      <Button
        as="button"
        state="Icon"
        color="Primary"
        variant="Light"
        shape="Circle"
        icon = {<i className="ki-solid ki-eye"/>}
        size="Large"
      />
      <h1 className="text-xl font-bold">Dashboard</h1>
    </div>
  );
};
export default Home;
