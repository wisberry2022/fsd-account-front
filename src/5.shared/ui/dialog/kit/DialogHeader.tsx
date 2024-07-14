import { FC, ReactNode } from "react";

type DialogHeaderProps = {
  children: ReactNode;
};

const DialogHeader: FC<DialogHeaderProps> = (props) => {
  const { children } = props;

  return <div id="dialog-header">{children}</div>;
};

export default DialogHeader;
