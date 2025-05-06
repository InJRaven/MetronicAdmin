import { ComponentProps, FC } from "react";
import { Toaster as Sonner } from "sonner";
import { useTheme } from "@hooks";

import { KeenIcon } from "@ui";

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
        success: <KeenIcon icon="shield-tick" style="filled" />,
        info: <KeenIcon icon="information-2" style="filled" />,
        warning: <KeenIcon icon="information-1" style="filled" />,
        error: <KeenIcon icon="shield-cross" style="filled" />,
        loading: (
          <KeenIcon icon="loading" style="filled" className="animate-spin" />
        ),
        close: <KeenIcon icon="cross" />,
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
