import { PageHeading, Toast } from "../../../UI";

const Home = () => {
  return (
    <>
      <PageHeading
        title="Dashboard"
        description="Central Hub for Personal Customization"
      />
      <Toast icon="Cross" alert="Hello" description="Test Alert" state="Solid" colors="Success"/>
      <Toast icon="Tick" alert="Hello" description="Test Alert" state="Basic" colors="Primary" />
    
    </>
  );
};
export default Home;
