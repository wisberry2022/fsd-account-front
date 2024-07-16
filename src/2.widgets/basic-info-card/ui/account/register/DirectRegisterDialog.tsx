import "./dir-reg-dlog.css";
import { AccountRegisterTable } from "@/4.entities/account";
import { Dialog } from "@/5.shared/ui";
import { FC } from "react";
import { createPortal } from "react-dom";

type DirectRegisterDialogProps = {
  open: boolean;
  onClose: () => void;
};

const DirectRegisterDialog: FC<DirectRegisterDialogProps> = (props) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} width={100}>
      <Dialog.Header>
        <div className="left">
          <h4>직접등록</h4>
        </div>
      </Dialog.Header>
      <Dialog.Body>
        <div className="act-reg-body">
          <AccountRegisterTable />
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          <button onClick={onClose}>닫기</button>
          <button onClick={() => {}} className="btn-sky-white">
            저장
          </button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};

export default DirectRegisterDialog;
