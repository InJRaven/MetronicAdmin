import { PageHeading } from "../../../UI";

interface SettingsType {
    className?: string;
  }

const Settings: React.FC<SettingsType> = () => {
    return (
        <PageHeading title="Settings Page" description="Adjust your preferences and platform settings."/>
    )
}

export default Settings;