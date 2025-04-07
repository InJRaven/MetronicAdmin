import clsx from "clsx";
import { type ReactNode } from "react";

interface TPageContainerProps {
  children?: ReactNode;
  className?: string;
}

const ContainerFixed = ({ className, children }: TPageContainerProps) => (
  <div className={clsx("container-fixed", className)}>{children}</div>
);

const ContainerFluid = ({ className, children }: TPageContainerProps) => (
  <div className={clsx("container-fixed", className)}>{children}</div>
);

const Container = {
  Fixed: ContainerFixed,
  Fluid: ContainerFluid,
};


export {Container}