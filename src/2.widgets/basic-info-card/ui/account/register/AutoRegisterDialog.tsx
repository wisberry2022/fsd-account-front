import "./auto-reg-dlog.css";
import { FC } from "react";
import { Dialog } from "@/5.shared/ui";
import { AccountListTable } from "@/4.entities/account";

type AutoRegisterDialogProps = {
  open: boolean;
  onClose: () => void;
};

const AutoRegisterDialog: FC<AutoRegisterDialogProps> = (props) => {
  const { open, onClose } = props;
  return (
    <Dialog open={open} onClose={onClose} width={100}>
      <Dialog.Header>
        <div className="left">
          <h4>자동등록</h4>
        </div>
      </Dialog.Header>
      <Dialog.Body>
        <div className="auto-reg-body scroll-bar">
          <p>
            확인 버튼을 누를 시, 아래 표기된 목록의 계정과목들이 일괄적으로
            등록됩니다.
          </p>
          <AccountListTable />
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          <button>취소</button>
          <button className="btn-sky-white">확인</button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};

export default AutoRegisterDialog;
