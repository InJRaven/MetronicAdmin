import clsx from "clsx";
import { FC, ReactNode } from "react";

interface FormLayoutPropsType {
  state: "Default" | "Label" | "Icon" | "Label + Icon";
  size: "Large" | "Small" | "Default";
  label?: string;
  htmlFor?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  Components?: ReactNode;
  GroupClassName?: string;
  FormLabelClassName?: string;
  CustomLayoutClassName?: string;
}
const FormLayout: FC<FormLayoutPropsType> = ({
  state = "Default",
  size = "Default",
  label,
  htmlFor,
  iconLeft,
  iconRight,
  Components,
  GroupClassName,
  FormLabelClassName,
  CustomLayoutClassName,
}) => {
  
  switch (state) {
    case "Label":
      return (
        <div className="w-full">
          <div
            className={clsx(
              "flex items-baseline flex-wrap gap-[1rem]",
              CustomLayoutClassName
            )}
          >
            <label
              htmlFor={htmlFor}
              className={clsx('form-label',{
    Default: "",
    Large: "label-lg",
    Small: "label-sm",
  }[size], FormLabelClassName)}
            >
              {label}
            </label>
            {Components}
          </div>
        </div>
      );

    case "Icon":
      return (
        <div className={GroupClassName}>
          {iconLeft}
          {Components}
          {iconRight}
        </div>
      );
    case "Label + Icon":
      return (
        <div className="w-full">
          <div
            className={clsx(
              "flex items-baseline flex-wrap gap-[1rem]",
              CustomLayoutClassName
            )}
          >
            <label className={clsx('form-label',{
    Default: "",
    Large: "label-lg",
    Small: "label-sm",
  }[size], FormLabelClassName)}>
              {label}
            </label>
            <div className={GroupClassName}>
              {iconLeft}
              {Components}
              {iconRight}
            </div>
          </div>
        </div>
      );
    default:
      return <>{Components}</>;
  }
};

export default FormLayout;
