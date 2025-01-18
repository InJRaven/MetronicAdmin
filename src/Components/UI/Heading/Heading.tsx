import React, { ReactNode } from "react";
import classNames from "classnames";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  className?: string;
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  as = "h1",
  size = "sm",
  className = "",
  children,
}) => {
  const Tag = as;
  const sizeClass = `text-heading-${size}`;
  return <Tag className={classNames(sizeClass, className)}>{children}</Tag>;
};


export default Heading;