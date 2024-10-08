import "./css/ok-cancel-dialog.css";
import { IoCloseSharp } from "react-icons/io5";
import { FC } from "react";
import { Dialog } from "./Dialog";
import { ObjType } from "@/5.shared/types";

type OkCancelDialogProps = {
  open: boolean;
  onClose: () => void;
  content: string;
  onClick: () => void;
  width?: number;
  color?: string;
};

export const OkCancelDialog: FC<OkCancelDialogProps> = (props) => {
  const { open, onClose, content, onClick, width = 30, color = "red" } = props;
  const onConfirm = () => {
    onClick();
    onClose();
  };

  const colors: ObjType<string> = {
    red: "btn-red-white",
    blue: "btn-sky-white",
  };

  return (
    <Dialog open={open} onClose={onClose} width={width}>
      <Dialog.Header>
        <div className="left"></div>
        <div className="right">
          <IoCloseSharp id="close-dlog" onClick={onClose} />
        </div>
      </Dialog.Header>
      <Dialog.Body>
        <p>{content}</p>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          <button className={colors[color]} onClick={onConfirm}>
            확인
          </button>
          <button className="cancel" onClick={onClose}>
            취소
          </button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};
