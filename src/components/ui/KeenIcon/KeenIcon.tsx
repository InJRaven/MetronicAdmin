import { forwardRef } from "react";
import "./keenicons/styles.bundle.css";
import clsx from "clsx";

type TKeenIconsStyle = "duotone" | "filled" | "solid" | "outline";
interface IKeenIconsProps {
  icon: string;
  style?: TKeenIconsStyle;
  className?: string;
}

const KeenIcon = forwardRef<HTMLElement, IKeenIconsProps>(
  ({ icon, style = "duotone", className = "", ...props }, ref) => {
    // const { settings } = useSettings();

    // Spread props and apply the ref to the <i> element
    return (
      <i
        ref={ref}
        {...props}
        className={clsx(`ki-${style}`, `ki-${icon}`, className)}
      />
    );
  }
);

KeenIcon.displayName = "KeenIcon";
export { KeenIcon };
