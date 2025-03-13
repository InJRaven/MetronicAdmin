import { ChangeEvent, FC } from "react";

import clsx from "clsx";
import FormLayout from "../FormLayout/FormLayout";

interface TextareaPropsType {
  state: "Default" | "Label";
  size?: "Small" | "Large" | "Default";
  label?: string;
  htmlFor?: string;
  id?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  name?: string;
  rows?: number;
  cols?: number;
  readOnly?: boolean;
  disabled?: boolean;
  FormLabelClassName?: string;
  TextareaClassName?: string;
  CustomLayoutClassName?: string;
}
const Textarea: FC<TextareaPropsType> = ({
  state = "Default",
  size = "Default",
  label,
  htmlFor,
  id,
  value,
  onChange,
  placeholder,
  name,
  rows = 4,
  cols,
  readOnly = false,
  disabled = false,
  FormLabelClassName,
  TextareaClassName,
  CustomLayoutClassName,
}) => {
  return (
    <FormLayout
      state={state}
      size={size}
      label={label}
      htmlFor={htmlFor}
      FormLabelClassName={FormLabelClassName}
      CustomLayoutClassName={clsx(
        { disabled: state === "Label" && disabled },
        CustomLayoutClassName
      )}
      Components={
        <textarea
          id={id}
          name={name}
          className={clsx(
            "textarea",
            { Default: "", Small: "textarea-sm", Large: "textarea-lg" }[size],
            { disabled: state === "Default" && disabled },
            TextareaClassName
          )}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          rows={rows}
          cols={cols}
          readOnly={readOnly}
          disabled={disabled}
        />
      }
    />
  );
};

export default Textarea;
