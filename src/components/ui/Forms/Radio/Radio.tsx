import clsx from "clsx";
import { ChangeEvent, forwardRef, ReactNode } from "react";

interface RadioInputPropsType {
  label?: string;
  size?: "Small" | "Default" | "Large";
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  htmlFor?: string;
  id?: string;
  name?: string;
  icon?: ReactNode;
  ariaLabel?: string;
  tabIndex?: number;
  checked?: boolean;
  autoFocus?: boolean;
  required?: boolean;
  disabled?: boolean;
  FormLabelClassName?: string;
  RadioButtonClassName?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioInputPropsType>(
  (
    {
      label,
      size = "Default",
      value,
      onChange,
      checked = false,
      htmlFor,
      id,
      name,
      icon,
      ariaLabel,
      tabIndex,
      autoFocus = false,
      required = false,
      disabled = false,
      FormLabelClassName,
      RadioButtonClassName,
    },
    ref // Lấy ref từ component cha
  ) => {
    return (
      <label
        className={clsx(
          "form-label flex items-center gap-[0.5rem] select-none",
          {
            Default: "",
            Large: "text-b-14-14-medium",
            Small: "text-b-12-12-medium",
          }[size],
          { disabled: disabled },
          FormLabelClassName
        )}
        htmlFor={htmlFor}
      >
        <input
          ref={ref} // Truyền ref từ component cha
          type="radio"
          value={value}
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          autoFocus={autoFocus}
          required={required}
          disabled={disabled}
          aria-label={ariaLabel}
          tabIndex={tabIndex}
          className={clsx(
            "radio",
            {
              Default: "",
              Small: "radio-sm",
              Large: "radio-lg",
            }[size],
            RadioButtonClassName
          )}
        />
        {label}
        {icon}
      </label>
    );
  }
);

export default Radio;
