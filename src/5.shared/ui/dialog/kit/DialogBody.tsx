import { FC, ReactNode } from "react";

type DialogBodyProps = {
  children: ReactNode;
};

const DialogBody: FC<DialogBodyProps> = (props) => {
  const { children } = props;
  return (
    <div id="dialog-body">
      <div className="content">{children}</div>
    </div>
  );
};

export default DialogBody;
