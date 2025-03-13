import clsx from "clsx";
import { ChangeEvent, forwardRef, ReactNode } from "react";

// Define the props for CheckBox component
interface SwitchPropsType {
  label?: string;
  size?: "Small" | "Default" | "Large"; // Corrected the typo here
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  htmlFor?: string;
  id?: string;
  name?: string;
  checked: boolean;
  icon?: ReactNode;
  autoFocus?: boolean;
  required?: boolean;
  disabled?: boolean;
  reverse?:true;
  SwitchClassName?: string;
  CheckBoxClassName?: string;
}

// Apply forwardRef to pass the ref from parent to child component
const Switch = forwardRef<HTMLInputElement, SwitchPropsType>(
  (
    {
      label,
      size = "Default", // Corrected the typo here as well
      value,
      onChange,
      checked,
      htmlFor,
      id,
      name,
      icon,
      autoFocus = false,
      required = false,
      disabled = false,
      reverse =false,
      SwitchClassName,
      CheckBoxClassName,
    },
    ref
  ) => {
    return (
      <label
        className={clsx(
          "switch",
          { disabled: disabled },
          { Default: "", Large: "switch-lg", Small: "switch-sm" }[size],{'flex-row-reverse' :reverse},
          SwitchClassName
        )}
        htmlFor={htmlFor}
      >
        <input
          ref={ref}
          type="checkbox"
          value={value}
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          autoFocus={autoFocus}
          required={required}
          disabled={disabled}
          className={clsx(CheckBoxClassName)} // Added the dynamic class name for the checkbox
        />
        {label && <span className="switch-label">{label}</span>}
        {icon}
      </label>
    );
  }
);

export default Switch;
