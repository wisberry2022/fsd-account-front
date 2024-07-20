import "./dir-reg-dlog.css";
import { AccountRegisterTable } from "@/4.entities/account";
import { useDataHandler } from "@/5.shared/hooks";
import { AccountAddRequest } from "@/5.shared/types";
import { Dialog } from "@/5.shared/ui";
import { FC } from "react";
import { Account } from "../../model/Account";
import { add } from "../../api/fetcher";

type DirectRegisterDialogProps = {
  open: boolean;
  onClose: () => void;
};

const DirectRegisterDialog: FC<DirectRegisterDialogProps> = (props) => {
  const { open, onClose } = props;
  const handler = useDataHandler<AccountAddRequest>(Account);

  const onSave = async () => {
    await add(handler.state);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} width={100}>
      <Dialog.Header>
        <div className="left">
          <h4>직접등록</h4>
        </div>
      </Dialog.Header>
      <Dialog.Body>
        <div className="act-reg-body">
          <AccountRegisterTable
            account={handler.state}
            onSelect={handler.onSelect}
            onRadio={handler.onRadioBoolean}
            onChangeInput={handler.onChangeInput}
          />
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          <button onClick={onClose}>닫기</button>
          <button onClick={onSave} className="btn-sky-white">
            저장
          </button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};

export default DirectRegisterDialog;
