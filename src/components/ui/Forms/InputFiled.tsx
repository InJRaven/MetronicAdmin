import clsx from "clsx";
import { ChangeEvent, FC, memo, ReactNode } from "react";

interface InputFiledsPropsType {
  label?: string;
  type: "text" | "number" | "email" | "password" | "search" | "tel" | "url";
  size: "Large" | "Medium" | "Small";
  variant: "Outline" | "Tertiary";
  value: string | number;
  name?: string;
  placeholder?: string;
  id?: string;
  flexDirection?: "Column" | "Column Reverse" | "Row" | "Row Reverse";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  autoCapitalize?: string;
  autoComplete?: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  inputFiledClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
}

const InputFiled: FC<InputFiledsPropsType> = memo(
  ({
    label,
    type = "text",
    size = "Medium",
    variant = "Outline",
    value = "",
    name,
    id,
    flexDirection = 'Row',
    placeholder,
    iconLeft,
    iconRight,
    onChange,
    autoCapitalize,
    autoComplete,
    readOnly,
    required,
    disabled,
    inputClassName,
    labelClassName,
    inputFiledClassName,
  }) => {
    const inputSize = {
      Large: "input-lg",
      Medium: "input-md",
      Small: "input-sm",
    };
    const inputVariant = {
      Outline: "border border-gray-300",
      Tertiary: "",
    };
    const fontSize = {
      Large: "text-b-14-14",
      Medium: "text-b-13-14",
      Small: "text-b-11-12",
    };
    const flexDirectionStyle = {
      Column: "flex-col items-baseline gap-[0.5rem]",
      "Column Reverse": "flex-col-reverse items-baseline gap-[0.5rem]",
      Row: "flex-row items-center gap-[1rem]",
      "Row Reverse": "flex-row-reverse items-baseline gap-[1rem]",
    };

    return (
      <>
        {label ? (
          <div className={clsx('w-full flex',flexDirectionStyle[flexDirection])}>
            <label
              htmlFor={name}
              className={clsx(fontSize[size], labelClassName)}
            >
              {label}
              {required && <span className="ml-1 text-warning">*</span>}
            </label>
            <div
              className={clsx(
                "input-field",
                inputSize[size],
                inputVariant[variant],
                inputFiledClassName
              )}
            >
              {iconLeft && iconLeft}
              <input
                type={type}
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                autoCapitalize={autoCapitalize}
                autoComplete={autoComplete}
                readOnly={readOnly}
                required={required}
                disabled={disabled}
                className={clsx(fontSize[size], inputClassName)}
              />
              {iconRight && iconRight}
            </div>
          </div>
        ) : (
          <div
            className={clsx(
              "input-field",
              inputSize[size],
              inputVariant[variant],
              inputFiledClassName
            )}
          >
            {iconLeft && iconLeft}
            <input
              type={type}
              id={id}
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              autoCapitalize={autoCapitalize}
              autoComplete={autoComplete}
              readOnly={readOnly}
              required={required}
              disabled={disabled}
              className={clsx(fontSize[size], inputClassName)}
            />
            {iconRight && iconRight}
          </div>
        )}
      </>
    );
  }
);

export default InputFiled;
