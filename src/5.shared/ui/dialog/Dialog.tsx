import "./core.css";
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
};

type DialogComposite = {
  Header: FC<DialogHeaderProps>;
  Body: FC<DialogBodyProps>;
  Footer: FC<DialogFooterProps>;
};

export const Dialog: FC<DialogProps> & DialogComposite = (props) => {
  const { open, onClose, children } = props;

  return open && <DialogWrapper onClose={onClose}>{children}</DialogWrapper>;
};

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
