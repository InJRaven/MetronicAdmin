import { Root, Trigger } from "@radix-ui/react-dialog";
import clsx from "clsx";
import { ReactNode } from "react";

interface IDialogProps {
  children?: ReactNode;
}

const Dialog = ({ children }: IDialogProps) => {
  return <Root>{children}</Root>;
};

interface IDialogTriggerProps {
  className?: string;
  children?: ReactNode;
}
const DialogTrigger = ({ className, children }: IDialogTriggerProps) => {
  return <Trigger className={clsx(className && className)}>{children}</Trigger>;
};

export { Dialog, DialogTrigger };
