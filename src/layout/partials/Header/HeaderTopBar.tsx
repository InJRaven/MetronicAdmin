import { Button, KeenIcon, Menu, MenuItem } from "@/components/ui";
const HeaderTopBar = () => {
  return (
    <div className="header-top-bar">
      <Button
        isIcon
        className="btn-icon-lg size-[3.6rem] rounded-full hover:bg-primary-light hover:text-primary text-gray-500"
      >
        <KeenIcon icon="magnifier" style="filled" />
      </Button>
      <Button
        isIcon
        className="btn-icon-lg size-[3.6rem] rounded-full hover:bg-primary-light hover:text-primary text-gray-500"
      >
        <KeenIcon icon="messages" style="filled" />
      </Button>
      <Button
        isIcon
        className="btn-icon-lg size-[3.6rem] rounded-full hover:bg-primary-light hover:text-primary text-gray-500"
      >
        <KeenIcon icon="notification-status" style="filled" />
      </Button>
      <Menu>
        <MenuItem>
        </MenuItem>
      </Menu>
    </div>
  );
};

export { HeaderTopBar };
