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
      <Calendar mode="Single"/>
      <Calendar mode="Week Numbers"/>

      <Calendar mode="Double"/>
      <Calendar mode="Range"/>

      <Toast alert="Hello" description="Test Alert" state="Dash Outline" colors="Warning" icon = 'Tick'/>
    </>
  );
};
export default Home;
