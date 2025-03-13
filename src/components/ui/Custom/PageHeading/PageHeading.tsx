import React, { ReactNode } from "react";
import classNames from "classnames";

interface PageHeadingProps {
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

const PageHeading: React.FC<PageHeadingProps> = ({
  title ='',
  description= '',
  className = "",
  children,
}) => {
  
  return (
  <section className={classNames('page-heading', className)}>
    <div className="flex flex-col items-start gap-[0.8rem]">
      <h1 className="title-page">{title}</h1>
      {description && <span className="text-b-14-14 text-gray-700">{description}</span>}
    </div>
    {children}
    </section>);
};

export default PageHeading;
