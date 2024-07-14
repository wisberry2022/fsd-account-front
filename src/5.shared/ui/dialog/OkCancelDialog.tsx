import "./dialog.css";
import { IoCloseSharp } from "react-icons/io5";
import { FC } from "react";
import DialogWrapper from "./DialogWrapper";

type OkCancelDialogProps = {
  open: boolean;
  onClose: () => void;
  content: string;
  onClick: () => void;
};

export const OkCancelDialog: FC<OkCancelDialogProps> = (props) => {
  const { open, onClose, content, onClick } = props;
  const onConfirm = () => {
    onClick();
    onClose();
  };

  return (
    open && (
      <DialogWrapper onClose={onClose}>
        <div id="dialog">
          <div id="dialog-header">
            <div className="left"></div>
            <div className="right">
              <IoCloseSharp id="close-dlog" onClick={onClose} />
            </div>
          </div>
          <div id="dialog-body">
            <div className="content">
              <p>{content}</p>
            </div>
          </div>
          <div id="dialog-footer">
            <div className="btn-box">
              <button className="ok" onClick={onConfirm}>
                확인
              </button>
              <button className="cancel" onClick={onClose}>
                취소
              </button>
            </div>
          </div>
        </div>
      </DialogWrapper>
    )
  );
};
