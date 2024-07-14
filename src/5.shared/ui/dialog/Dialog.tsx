import { FC, ReactNode } from "react";
import DialogWrapper from "./kit/DialogWrapper";
import DialogHeader from "./kit/DialogHeader";
import DialogBody from "./kit/DialogBody";
import DialogFooter from "./kit/DialogFooter";

type DialogHeaderProps = {
  children: ReactNode;
};

type DialogBodyProps = {
  children: ReactNode;
};

type DialogFooterProps = {
  children: ReactNode;
};

type DialogProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: number;
};

type DialogComposite = {
  Header: FC<DialogHeaderProps>;
  Body: FC<DialogBodyProps>;
  Footer: FC<DialogFooterProps>;
};

export const Dialog: FC<DialogProps> & DialogComposite = (props) => {
  const { open, onClose, children, width = 30 } = props;

  return (
    open && (
      <DialogWrapper onClose={onClose} width={width}>
        {children}
      </DialogWrapper>
    )
  );
};

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
