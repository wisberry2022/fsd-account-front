import { AccountDelete, AccountRegister } from "@/3.features/account";
import "./account-manager.css";
import { Dialog } from "@/5.shared/ui";
import { FC } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Accounts } from "@/4.entities/account";

type AccountManagerProps = {
  open: boolean;
  onClose: () => void;
};

const AccountManager: FC<AccountManagerProps> = (props) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} width={50}>
      <Dialog.Header>
        <div className="left">
          <h4>계정과목 관리</h4>
        </div>
        <div className="right">
          <IoCloseSharp id="close-dlog" onClick={onClose} />
        </div>
      </Dialog.Header>
      <Dialog.Body>
        <div className="act-list-area">
          <div className="act-header">
            <AccountRegister onClick={() => {}} />
            <AccountDelete onClick={() => {}} />
          </div>
          <div className="act-list scroll-bar">
            <Accounts />
          </div>
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          <button className="btn-sky-white" onClick={onClose}>
            확인
          </button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};

export default AccountManager;
