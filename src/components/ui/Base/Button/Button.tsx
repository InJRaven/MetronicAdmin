import clsx from "clsx";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonType {
  as?: "button" | "a";
  link?: string;
  state: "Default" | "Icon";
  size?: "Large" | "Medium" | "Small" | "ExtraSmall";
  color?:
    | "Light"
    | "Primary"
    | "Success"
    | "Warning"
    | "Danger"
    | "Info"
    | "Dark";
  text?: string;
  disabled?: boolean;
  variant?: "Solid" | "Light" | "Tertiary";
  className?: string;
  onClick?: () => void;
}
const buttonSize = {
  Default: {
    Large: "px-[1.6rem] py-[1.4rem] text-base font-medium",
    Medium: "px-[1.6rem] py-[1.3rem] text-md font-medium",
    Small: "px-[1.2rem] py-[1rem] text-sm font-medium",
    ExtraSmall: "px-[0.8rem] py-[1rem] text-xs font-medium",
  },
  Icon: {
    Large: "p-[1rem] text-md font-medium",
    Medium: "p-[0.8rem] text-md font-medium",
    Small: "p-[0.7rem] text-sm font-medium",
    ExtraSmall: "p-[0.6rem] text-xs font-medium",
  },
};

const variantButton = {
  Solid: {
    Primary:
      "btn__solid btn__solid--primary bg-primary text-light dark:text-gray-900 border-primary hover:bg-primary-active hover:border-primary-active hover:shadow-lg hover:shadow-light-primary dark:hover:shadow-dark-primary",
    Success:
      "btn__solid btn__solid--success bg-success text-light dark:text-gray-900 border-success hover:bg-success-active hover:border-success-active hover:shadow-lg hover:shadow-light-success dark:hover:shadow-dark-success",
    Warning:
      "btn__solid btn__solid--warning bg-warning text-light dark:text-gray-900 border-warning hover:bg-warning-active hover:border-warning-active hover:shadow-lg hover:shadow-light-warning dark:hover:shadow-dark-warning",
    Danger:
      "btn__solid btn__solid--danger bg-danger text-light dark:text-gray-900 border-danger hover:bg-danger-active hover:border-danger-active hover:shadow-lg hover:shadow-light-danger dark:hover:shadow-dark-danger",
    Info: "btn__solid btn__solid--info bg-info text-light dark:text-gray-900 border-info hover:bg-info-active hover:border-info-active hover:shadow-lg hover:shadow-light-info dark:hover:shadow-dark-info",
    Dark: "btn__solid btn__solid--dark bg-dark text-light dark:text-gray-900 border-dark hover:bg-dark-active hover:border-dark-active hover:shadow-lg hover:shadow-light-dark dark:hover:shadow-dark-dark",
    Light:
      "btn__solid btn__solid--light bg-secondary text-gray-700 border-gray-200 dark:border-gray-400 hover:text-gray-800 hover:bg-secondary-active hover:border-gray-300 hover:shadow-light-light dark:hover:border-gray-500",
  },
  Tertiary: {
    Primary:
      "btn__tertiary btn__tertiary-primary bg-transparent text-primary border-none hover:bg-primary-active hover:border-primary-active hover:shadow-lg hover:text-white hover:shadow-light-primary dark:hover:shadow-dark-primary",
    Success:
      "btn__tertiary btn__tertiary--success bg-transparent text-success border-none hover:bg-success-active hover:border-success-active hover:shadow-lg hover:text-white hover:shadow-light-success dark:hover:shadow-dark-success",
    Warning:
      "btn__tertiary btn__tertiary--warning bg-transparent text-warning border-none hover:bg-warning-active hover:border-warning-active hover:shadow-lg hover:text-white hover:shadow-light-warning dark:hover:shadow-dark-warning",
    Danger:
      "btn__tertiary btn__tertiary--danger bg-transparent text-danger border-none hover:bg-danger-active hover:border-danger-active hover:shadow-lg hover:text-white hover:shadow-light-danger dark:hover:shadow-dark-danger",
    Info: "btn__tertiary btn__tertiary--info bg-transparent text-info border-none hover:bg-info-active hover:border-info-active hover:shadow-lg hover:text-white hover:shadow-light-info dark:hover:shadow-dark-info",
    Dark: "btn__tertiary hidden",
    Light:
      "btn__tertiary text-gray-700 hover:bg-gray-200 hover:shadow-light-light",
  },
  Light: {
    Primary:
      "btn__light btn__light--primary bg-primary-light text-primary border border-primary hover:bg-primary-active hover:border-primary-active hover:shadow-lg hover:text-white hover:shadow-light-primary dark:hover:shadow-dark-primary",
    Success:
      "btn__light btn__light--success bg-success-light text-success border border-success hover:bg-success-active hover:border-success-active hover:shadow-lg hover:text-white hover:shadow-light-success dark:hover:shadow-dark-success",
    Warning:
      "btn__light btn__light--warning bg-warning-light text-warning border border-warning hover:bg-warning-active hover:border-warning-active hover:shadow-lg hover:text-white hover:shadow-light-warning dark:hover:shadow-dark-warning",
    Danger:
      "btn__light btn__light--danger bg-danger-light text-danger border border-danger hover:bg-danger-active hover:border-danger-active hover:shadow-lg hover:text-white hover:shadow-light-danger dark:hover:shadow-dark-danger",
    Info: "btn__light btn__light--info bg-info-light text-info border border-info hover:bg-info-active hover:border-info-active hover:shadow-lg hover:text-white hover:shadow-light-info dark:hover:shadow-dark-info",
    Dark: "btn__light hidden",
    Light:
      "btn__light btn__light--light bg-light-light border border-gray-300 text-gray-700 hover:bg-secondary-active hover:border-gray-300 hover:shadow-light-light",
  },
};

const buttonShape = {
  Square: "!rounded-[0.6rem]",
  Circle: "!rounded-[6rem]",
};

interface ButtonTypeInterface extends ButtonType {
  iconLeft?: ReactNode;
  icon?: ReactNode;
  shape?: "Circle" | "Square"
  iconRight?: ReactNode;
}

const Button: FC<ButtonTypeInterface> = ({
  as = "button",
  link,
  state = "Default",
  size = "Medium",
  color = "Primary",
  variant = "Solid",
  shape = "Square",
  iconLeft,
  icon,
  iconRight,
  text,
  disabled = false,
  className = "",
  onClick,
}) => {
  const Tag = as;
  const classes = clsx(
    "btn",
    buttonSize[state][size], // Size-specific class
    variantButton[variant][color],
    state === "Icon" && buttonShape[shape],
    {
      "opacity-50 pointer-events-none": disabled,
    },
    className // Custom class
  );

  if (Tag === "a" && link) {
    return (
      <Link
        className={classes}
        to={link}
        role="button"
        aria-disabled={disabled ? "true" : "false"} // Accessibility
      >
        {iconLeft && <span className="icon-left">{iconLeft}</span>}
        {text && <span className="btn-text">{text}</span>}
        {icon && icon}
        {iconRight && <span className="icon-right">{iconRight}</span>}
      </Link>
    );
  }

  // Handle 'button' tag
  return (
    <button
      className={classes}
      onClick={onClick} // Prevent onClick when disabled
      disabled={disabled} // Disabled attribute for button
    >
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      {text && state === 'Default' &&  <span className="btn-text">{text}</span>}
      {icon && state === 'Icon' && icon}
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </button>
  );
};

export default Button;
