/* eslint-disable no-unused-vars */
import Backdrop from "@mui/material/Backdrop";
import clsx from "clsx";
import { forwardRef } from "react";

interface IModalBackdropProps {
  className?: string;
  open: boolean;
  ownerState: any;
}

// Forwarding ref to ensure this component can hold a ref
const ModalBackdrop = forwardRef<HTMLDivElement, IModalBackdropProps>(
  ({ className, ownerState, ...props }, ref) => {
    const { ...other } = props;

    return (
      <Backdrop
        ref={ref}
        className={clsx(className && className)}
        aria-hidden="true"
        {...other}
      />
    );
  }
);

export { ModalBackdrop, type IModalBackdropProps };
