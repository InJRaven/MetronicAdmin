import clsx from "clsx";
import { ReactNode } from "react";

interface InputType {
  inputRef?: React.RefObject<HTMLInputElement>;
  type: "text" | "email" | "password" | "search" | "tel" | "url";
  size: "Large" | "Medium" | "Small" | "ExtraSmall";
  variant: "Outline" | "Tertiary";
  label?: string;
  htmlFor?: string;
  value?: string;
  onChange?: () => void;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}
const InputGroup: React.FC<InputType> = ({
  inputRef,
  type = "text",
  size = "Medium",
  variant = "Outline",
  label,
  htmlFor,
  value,
  onChange,
  iconLeft,
  iconRight,
  disabled,
  placeholder,
  className,
}) => {
  const classes = clsx('input-group', className)
    return (
        <div className={classes}>
          {label && <label htmlFor={htmlFor}>{label}</label>}
          .inputs
        </div>
    )
};

export default InputGroup;
