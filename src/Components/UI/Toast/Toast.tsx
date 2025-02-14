import clsx from "clsx";
import { ReactNode } from "react";

interface ToastType {
  alert?: string;
  description?: string;
  button?: boolean;
  colors?: "Primary" | "Warning" | "Danger" | "Success" | "Info";
  state?: "Basic" | "Solid" | "Light" | "Outline" | "Dash Outline";
  iconLeft?: ReactNode;
  className?: string;
  onClick?: () => void;
}
const Toast: React.FC<ToastType> = ({
  alert = "",
  description = "",
  button,
  iconLeft,
  colors = "Primary",
  state = "Basic",
  className,
  onClick,
}) => {
  const buttonState = {
    Basic: {
      Primary: "basic border-primary-clarity bg-primary-light",
      Warning: "!hidden",
      Danger: "basic border-danger-clarity bg-danger-light",
      Success: "basic border-success-clarity bg-success-light",
      Info: "basic border-info-clarity bg-info-light",
    },
    Solid: {
      Primary: "solid bg-primary",
      Warning: "!hidden",
      Danger: "solid bg-danger",
      Success: "solid bg-success",
      Info: "solid bg-info",
    },
    Light: {
      Primary: "light bg-primary-light",
      Warning: "light bg-warning-light",
      Danger: "light bg-danger-light",
      Success: "light bg-success-light",
      Info: "light bg-info-light",
    },
    Outline: {
      Primary: "outline border-primary bg-primary-light",
      Warning: "!hidden",
      Danger: "outline border-danger bg-danger-light",
      Success: "outline border-success bg-success-light",
      Info: "outline border-info bg-info-light",
    },
    "Dash Outline": {
      Primary: "dash border-primary bg-primary-light",
      Warning: "dash border-warning bg-warning-light",
      Danger: "dash border-danger bg-danger-light",
      Success: "dash border-success bg-success-light",
      Info: "dash border-info bg-info-light",
    },
  };

  const textStyle = {
    Basic:{
        Primary: {
            icon:'text-primary',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Warning: {
            icon:'',
            alert: 'self-stretch text-b-15-16-semibold ',
            description:'self-stretch text-b-13-14-medium ',
        },
        Danger:{
            icon:'text-danger',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Success: {
            icon:'text-success',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Info: {
            icon:'text-info',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
    },
    Solid:{
        Primary: {
            icon:'text-primary-light',
            alert: 'self-stretch text-b-15-16-semibold text-light',
            description:'self-stretch text-b-13-14-medium text-light',
        },
        Warning: {
            icon:'',
            alert: 'self-stretch text-b-15-16-semibold ',
            description:'self-stretch text-b-13-14-medium ',
        },
        Danger:{
            icon:'text-danger-light',
            alert: 'self-stretch text-b-15-16-semibold text-light',
            description:'self-stretch text-b-13-14-medium text-light',
        },
        Success: {
            icon:'text-success-light',
            alert: 'self-stretch text-b-15-16-semibold text-light',
            description:'self-stretch text-b-13-14-medium text-light',
        },
        Info: {
            icon:'text-info-light',
            alert: 'self-stretch text-b-15-16-semibold text-light',
            description:'self-stretch text-b-13-14-medium text-light',
        },
    },
    Light:{
        Primary: {
            icon:'text-primary',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Warning: {
            icon:'text-warning',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Danger:{
            icon:'text-danger',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Success: {
            icon:'text-success',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Info: {
            icon:'text-info',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
    },
    Outline:{
        Primary: {
            icon:'text-primary',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Warning: {
            icon:'text-warning',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Danger:{
            icon:'text-danger',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Success: {
            icon:'text-success',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Info: {
            icon:'text-info',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
    },
    "Dash Outline":{
        Primary: {
            icon:'text-primary',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Warning: {
            icon:'text-warning',
            alert: 'self-stretch text-b-15-16-semibold ',
            description:'self-stretch text-b-13-14-medium ',
        },
        Danger:{
            icon:'text-danger',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Success: {
            icon:'text-success',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
        Info: {
            icon:'text-info',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-700',
        },
    }
  }
  const icon = {
    Cross: '',
    Tick: '',
    Close:'',
  }
  const toastStyle = clsx("toast", buttonState[state][colors], className);
  return (
    <div className={toastStyle}>
      <div className="flex items-center gap-[1.6rem] flex-1">
        {iconLeft && <span className={`icon-left ${textStyle[state][colors].icon}`}>{iconLeft}</span>}
        <div className="flex flex-col items-center justify-center gap-[0.2rem] flex-1">
            {alert && <span className={`${textStyle[state][colors].alert}`}>{alert}</span>}
            {description && <span className={`${textStyle[state][colors].description}`}>{description}</span>}
        </div>
        {button && button}
      </div>
    </div>
  );
};

export default Toast;
