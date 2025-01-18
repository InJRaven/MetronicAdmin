import { Button, Input } from "../../../UI";

const Home = () => {
  return (
    <div>
      <Button
        as="button"
        state="Icon"
        color="Primary"
        variant="Light"
        shape="Circle"
        icon = {<i className="ki-solid ki-eye"/>}
        size="Large"
      />
    </div>
  );
};
export default Home;
