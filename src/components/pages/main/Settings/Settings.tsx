import {PageHeading} from "@custom";


interface SettingsType {
  className?: string;
}

const Settings: React.FC<SettingsType> = () => {
  return (
    <PageHeading
      title="Settings Page"
      description="Adjust your preferences and platform settings."
    />
  );
};

export default Settings;
