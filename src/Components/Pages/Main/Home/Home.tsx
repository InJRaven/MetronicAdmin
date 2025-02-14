import { PageHeading, Toast } from "../../../UI";

const Home = () => {
  return (
    <>
      <PageHeading
        title="Dashboard"
        description="Central Hub for Personal Customization"
      />
      <Toast alert="Hello" description="Test Alert" state="Dash Outline" colors="Warning" iconLeft = {<i className="icon ki-shield-cross ki-duotone"/>}/>
    </>
  );
};
export default Home;
