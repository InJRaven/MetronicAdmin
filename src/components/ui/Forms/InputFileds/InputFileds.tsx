import { ChangeEvent, forwardRef, ReactNode } from "react";
import FormLayout from "../FormLayout/FormLayout";
import { cn } from "@/lib/utils"; 


type State = "Default" | "Label" | "Icon" | "Label + Icon";
type TypeInput =
  | "text"
  | "number"
  | "email"
  | "password"
  | "search"
  | "tel"
  | "url";

type Size = "Large" | "Default" | "Small";
interface InputFiledsPropsType {
  state: State;
  type: TypeInput;
  size: Size;
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

const InputFileds = forwardRef<HTMLInputElement, InputFiledsPropsType>(
  (
    {
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
      disabled = false,
      CustomLayoutClassName,
      GroupClassName,
      FormLabelClassName,
      InputClassName,
    },
    ref
  ) => {
    const inputSize = {
      Default: "",
      Small: "input-sm",
      Large: "input-lg",
    };

    return (
      <FormLayout
        state={state}
        size={size}
        label={label}
        htmlFor={htmlFor}
        GroupClassName={cn(
          {
            input: state === "Icon" || state === "Label + Icon",
            disabled: state === "Icon" && disabled,
          },
          (state === "Icon" || state === "Label + Icon") && inputSize[size],
          GroupClassName
        )}
        FormLabelClassName={FormLabelClassName}
        CustomLayoutClassName={cn(
          { disabled: disabled },
          CustomLayoutClassName
        )}
        iconLeft={iconLeft}
        iconRight={iconRight}
        Components={
          <input
            ref={ref}
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
            className={cn(
              {
                input: state === "Default" || state === "Label",
                disabled: state === "Default" && disabled,
              
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
