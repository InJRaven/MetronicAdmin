import { PageHeading, Toast } from "../../../UI";
import Calendar from "../../../UI/Calendar/Calendar";
import DatePicker from "../../../UI/DatePicker/DatePicker";

const Home = () => {
  return (
    <>
      <PageHeading
        title="Dashboard"
        description="Central Hub for Personal Customization"
      />
      <DatePicker />
      <Calendar mode="Double"/>
      <Toast alert="Hello" description="Test Alert" state="Dash Outline" colors="Warning" iconLeft = {<i className="icon ki-shield-cross ki-duotone"/>}/>
    </>
  );
};
export default Home;
