import clsx from "clsx";
import { ChangeEvent, forwardRef, ReactNode, useEffect } from "react";

// Define the props for CheckBox component
interface CheckBoxPropsType {
  label?: string;
  size?: "Small" | "Default" | "Large";
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  htmlFor?: string;
  id?: string;
  name?: string;
  checked: boolean;
  icon?: ReactNode;
  indeterminate?: boolean;
  autoFocus?: boolean;
  required?: boolean;
  disabled?: boolean;
  FormLabelClassName?: string;
  CheckBoxClassName?: string;
}

// Apply forwardRef to pass the ref from parent to child component
const CheckBox = forwardRef<HTMLInputElement, CheckBoxPropsType>(
  (
    {
      label,
      size = "Defautl",
      value,
      onChange,
      checked,
      htmlFor,
      id,
      name,
      icon,
      indeterminate = false,
      autoFocus = false,
      required = false,
      disabled = false,
      FormLabelClassName,
      CheckBoxClassName,
    },
    ref
  ) => {
    useEffect(() => {
      if (ref && typeof ref !== "function" && ref.current) {
        ref.current.indeterminate = indeterminate;
      }
    }, [indeterminate, ref]);
    return (
      <label
        className={clsx(
          "form-label flex items-center gap-[0.5rem] select-none",
          {
            Default: "",
            Large: "label-lg",
            Small: "label-sm",
          }[size],
          { disabled: disabled },
          FormLabelClassName
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
          className={clsx(
            "checkbox",
            {
              Default: "",
              Small: "checkbox-sm",
              Large: "checkbox-lg",
            }[size],
            CheckBoxClassName
          )}
        />
        {label}
        {icon}
      </label>
    );
  }
);

export default CheckBox;
