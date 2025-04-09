import { ComponentProps, FC } from "react";
import { Toaster as Sonner } from "sonner";
import { useTheme } from "@hooks";

import { KeenIcons } from "../KeenIcons/KeenIcons";

interface ToasterProps extends Omit<ComponentProps<typeof Sonner>, "position"> {
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
}

const Toaster: FC<ToasterProps> = ({ position = "bottom-right", ...props }) => {
  const { theme = "system" } = useTheme();
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position={position}
      className="toaster group"
      icons={{
        success: <KeenIcons icon={"Shield Tick"} style={"Filled"} />,
        info: <KeenIcons icon={"Information 2"} style={"Filled"} />,
        warning: <KeenIcons icon={"Information 1"} style={"Filled"} />,
        error: <KeenIcons icon={"Shield Cross"} style={"Filled"} />,
        loading: (
          <KeenIcons
            icon={"Loading"}
            style={"Filled"}
            className="animate-spin"
          />
        ),
        close: <KeenIcons icon={"Cross"} style={"Duotone"} />,
      }}
      toastOptions={{
        classNames: {
          toast: "toast",
          title: "toast-title",
          icon: "toast-icon",
          content: "toast-content",
          description: "toast-description",
          actionButton: "toast-action-button",
          cancelButton: "toast-cancel-button",
          closeButton: "toast-close-button",
        },
      }}
      {...props}
    />
  );
};
export { Toaster };
