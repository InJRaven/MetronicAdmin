import clsx from "clsx";
import { ChangeEvent, FC, forwardRef } from "react";

// Define the props for CheckBox component
interface CheckBoxPropsType {
  label: string;
  size?: "Small" | "Default" | "Large";
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  htmlFor?: string;
  id?: string;
  name?: string;
  checked: boolean;
  indeterminate?: boolean;
  autoFocus?: boolean;
  required?: boolean;
  disabled?: boolean;
  FormLabelClassName?: string;
  CheckBoxClassName?: string;
}

// Apply forwardRef to pass the ref from parent to child component
const CheckBox: FC<CheckBoxPropsType> = forwardRef<
  HTMLInputElement,
  CheckBoxPropsType
>(
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
      autoFocus = false,
      required = false,
      disabled = false,
      FormLabelClassName,
      CheckBoxClassName,
    },
    ref
  ) => {
    return (
      <label
        className={clsx(
          "form-label flex items-center gap-[0.5rem] cursor-pointer",
          {
            Default: "",
            Large: "text-b-14-14-medium",
            Small: "text-b-12-12-medium",
          }[size],
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
      </label>
    );
  }
);

export default CheckBox;
