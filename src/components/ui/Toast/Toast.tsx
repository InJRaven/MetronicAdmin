import clsx from "clsx";
import { useMemo } from "react";

interface ToastType {
  alert: string;
  description?: string;
  colors: "Primary" | "Warning" | "Danger" | "Success" | "Info";
  state: "Basic" | "Solid" | "Light" | "Outline" | "Dash Outline";
  icon: 'Cross' | 'Tick' | 'Information'
  className?: string;
  onClick?: () => void;
}
const Toast: React.FC<ToastType> = ({
  alert = "",
  description = "",
  icon = 'Cross',
  colors = "Primary",
  state = "Basic",
  className,
  onClick,
}) => {
  const BUTTON_STYLES = {
    Basic: {
      Primary: "basic !border-primary-clarity bg-primary-light",
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

  const TEXT_STYLES = {
    Basic:{
        Primary: {
            icon:'text-primary',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-primary',
        },
        Warning: {
            icon:'',
            alert: 'self-stretch text-b-15-16-semibold',
            description:'self-stretch text-b-13-14-medium',
        },
        Danger:{
            icon:'text-danger',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-danger',
        },
        Success: {
            icon:'text-success',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-success',
        },
        Info: {
            icon:'text-info',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-info',
        },
    },
    Solid:{
        Primary: {
            icon:'text-primary-light dark:text-[#EFF6FF]',
            alert: 'self-stretch text-b-15-16-semibold text-white',
            description:'self-stretch text-b-13-14-medium text-white',
        },
        Warning: {
            icon:'',
            alert: 'self-stretch text-b-15-16-semibold',
            description:'self-stretch text-b-13-14-medium',
        },
        Danger:{
            icon:'text-danger-light dark:text-[#FFEEF3]',
            alert: 'self-stretch text-b-15-16-semibold text-white',
            description:'self-stretch text-b-13-14-medium text-white',
        },
        Success: {
            icon:'text-success-light dark:text-[#EAFFF1]',
            alert: 'self-stretch text-b-15-16-semibold text-white',
            description:'self-stretch text-b-13-14-medium text-white',
        },
        Info: {
            icon:'text-info-light dark:text-[#F8F5FF]',
            alert: 'self-stretch text-b-15-16-semibold text-white',
            description:'self-stretch text-b-13-14-medium text-white',
        },
    },
    Light:{
        Primary: {
            icon:'text-primary',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-600',
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
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-600',
        },
        Danger:{
            icon:'text-danger',
            alert: 'self-stretch text-b-15-16-semibold text-gray-800',
            description:'self-stretch text-b-13-14-medium text-gray-600',
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
  const ICON_STYLE = {
    Cross: 'ki-shield-cross ki-duotone',
    Tick: 'ki-shield-tick ki-duotone',
    Information: 'ki-information-4 ki-duotone'    
  }

  const toastStyle = useMemo(() => clsx("toast", BUTTON_STYLES[state][colors], className), [state, colors, className]) ;

  const toastText = useMemo (() => TEXT_STYLES[state][colors], [state, colors])
  
  const toastIcon = useMemo(() => ICON_STYLE[icon], [icon])
  return (
    <div className={toastStyle}>
      <div className="flex items-center gap-[1.6rem] flex-1">
        {icon && <span className={`toast-icon ${toastText.icon}`}><i className={toastIcon}/></span>}
        <div className="flex flex-col items-center justify-center gap-[0.2rem] flex-1">
            {alert && <span className={`${toastText.alert}`}>{alert}</span>}
            {description && <span className={`${toastText.description}`}>{description}</span>}
        </div>
        <button className={`toast-button ${toastText.icon}`} onClick={onClick}><i className="ki-cross ki-duotone" /></button>
      </div>
    </div>
  );
};

export default Toast;
