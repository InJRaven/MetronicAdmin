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

const LoadingIcon = () => {
  return (
    <svg
      className="animate-spin -ml-1 text-muted-foreground"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

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
        loading: <LoadingIcon />,
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
