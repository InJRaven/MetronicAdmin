import MuiModal, { ModalProps } from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { ModalBackdrop } from "./";

import { forwardRef } from "react";
import clsx from "clsx";

interface IModalProps extends ModalProps {
  zIndex?: number;
  className?: string;
}

const Modal = forwardRef<HTMLDivElement, IModalProps>(
  ({ open, onClose, children, className, zIndex = 100, ...props }, ref) => {
    return (
      <MuiModal
        ref={ref}
        open={open}
        onClose={onClose}
        closeAfterTransition
        style={{
          zIndex: `${zIndex}`,
          opacity: open ? 1 : 0,
          display: open ? "block" : "none",
        }}
        className={clsx("modal", className)}
        {...props}
        slots={{ backdrop: ModalBackdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>{children}</Fade>
      </MuiModal>
    );
  }
);
export { Modal };
