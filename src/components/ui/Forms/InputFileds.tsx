import clsx from "clsx";
import { ChangeEvent, FC, memo, ReactNode } from "react";
import InputLayout from "./InputLayout";

interface InputFiledsPropsType {
  state: "Default" | "Label" | "Icon" | "Label + Icon";
  type: "text" | "number" | "email" | "password" | "search" | "tel" | "url";
  size: "Large" | "Default" | "Small";
  label?: string;
  value: string | number;
  name?: string;
  placeholder?: string;
  id?: string;
  htmlFor?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  autoCapitalize?: string;
  autoComplete?: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  CustomLayoutClassName?: string;
  GroupClassName?: string;
  FormLabelClassName?: string;
  InputClassName?: string;
}

const InputFileds: FC<InputFiledsPropsType> = memo(
  ({
    state = "Default",
    label,
    type = "text",
    size = "Default",
    value = "",
    name,
    id,
    htmlFor,
    placeholder,
    iconLeft,
    iconRight,
    onChange,
    autoCapitalize,
    autoComplete,
    readOnly,
    required,
    disabled,
    CustomLayoutClassName,
    GroupClassName,
    FormLabelClassName,
    InputClassName,
  }) => {
    const inputSize = {
      Default: "",
      Small: "input-sm",
      Large: "input-lg",
    };

    return (
      <InputLayout
        state={state}
        size={size}
        label={label}
        htmlFor={htmlFor}
        GroupClassName={clsx(
          {
            input: state === "Icon" || state === "Label + Icon",
          },
          (state === "Icon" || state === "Label + Icon") && inputSize[size],
          GroupClassName
        )}
        FormLabelClassName={FormLabelClassName}
        CustomLayoutClassName={CustomLayoutClassName}
        iconLeft={iconLeft}
        iconRight={iconRight}
        Components={
          <input
            type={type}
            id={id}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            autoCapitalize={autoCapitalize}
            readOnly={readOnly}
            disabled={disabled}
            autoComplete={autoComplete}
            required={required}
            className={clsx(
              {
                input: state === "Default" || state === "Label",
              },
              (state === "Default" || state === "Label") && inputSize[size],
              InputClassName
            )}
          />
        }
      />
    );
  }
);

export default InputFileds;
