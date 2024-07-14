import { FC, ReactNode } from "react";

type DialogFooterProps = {
  children: ReactNode;
};

const DialogFooter: FC<DialogFooterProps> = (props) => {
  const { children } = props;
  return <div id="dialog-footer">{children}</div>;
};

export default DialogFooter;
