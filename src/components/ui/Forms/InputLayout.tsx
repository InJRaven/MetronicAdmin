import clsx from "clsx";
import { FC, ReactNode } from "react";

interface InputLayoutPropsType {
  state: "Default" | "Label" | "Icon" | "Label + Icon";
  size: "Large" | "Small" | "Default";
  label?: string;
  htmlFor?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  Components?: ReactNode;
  GroupClassName?: string;
  LabelClassName?: string;
  CustomLayoutClassName?: string;
}
const InputLayout: FC<InputLayoutPropsType> = ({
  state = "Default",
  size = "Default",
  label,
  htmlFor,
  iconLeft,
  iconRight,
  Components,
  GroupClassName,
  LabelClassName,
  CustomLayoutClassName,
}) => {
  const fontSize = {
    Default: "text-b-13-14-medium",
    Large: "text-b-14-14-medium",
    Small: "text-b-11-12-medium",
  };
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
              className={clsx(fontSize[size], LabelClassName)}
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
            <label className={clsx(fontSize[size], LabelClassName)}>
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

export default InputLayout;
