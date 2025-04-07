import clsx from "clsx";

interface DataDisplayType {
  state: "default" | "light";
  size: "Large" | "Medium" | "Small" | "ExSmall";
  color: "primary" | "success" | "warning" | "danger" | "info" | "gray";
  type: "rounded" | "circle";
  title: string;
  className?: string;
}
const DataDisplay: React.FC<DataDisplayType> = ({
  state = "default",
  size = "Medium",
  color = "primary",
  type = "rounded",
  title = "",
  className,
}) => {
  const validColor = [
    "primary",
    "success",
    "warning",
    "danger",
    "info",
    "gray",
  ].includes(color)
    ? color
    : "primary";

  const classes = clsx(
    "dataDisplay",
    {
      ["px-[1.1rem] py-[0.9rem]"]: size === "Large",
      ["p-[0.8rem]"]: size === "Medium",
      ["p-[0.5rem]"]: size === "Small",
      ["p-[0.4rem]"]: size === "ExSmall",
    },
    {
      [`${`${
        validColor === "gray"
          ? `bg-gray-200 text-gray-700`
          : `bg-${validColor} text-light`
      }`} dataDisplay__default--${validColor}`]: state === "default",

      [`${`${
        validColor === "gray"
          ? `bg-gray-200 text-gray-700`
          : `border-${validColor} border text-${validColor}`
      }`} dataDisplay__light--${validColor}`]: state === "light",
    },
    {
      ["rounded-[0.4rem]"]: type === "rounded",
      ["rounded-[3rem]"]: type === "circle",
    },
    className
  );

  const rectangle = clsx(
    "rectangle",
    {
      Large: "w-[0.7rem] h-[0.7rem]",
      Medium: "w-[0.6rem] h-[0.6rem]",
      Small: "w-[0.5rem] h-[0.5rem]",
      ExSmall: "w-[0.4rem] h-[0.4rem]",
    }[size],
    {
        default: `${validColor === "gray" ? "bg-gray-700" : `bg-light`}`,
        light:`${validColor === "gray" ? "bg-gray-700" : `bg-${validColor}`}`,
    }[state],
    "rounded-[2rem]"
  );
  return (
    <div className={classes}>
      {type === "circle" && <span className={rectangle}></span>}
      <span>{title}</span>
    </div>
  );
};

export default DataDisplay;
