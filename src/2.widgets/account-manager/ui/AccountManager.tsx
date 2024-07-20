import "./account-manager.css";
import { Dialog } from "@/5.shared/ui";
import { FC, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Accounts } from "@/4.entities/account";
import { useKeywordPopover } from "@/5.shared/hooks";
import { AccountDelete, AccountRegister } from "@/3.features/account";
import AccountRegisterBranch from "./register/AccountRegisterBranch";
import { useGetAllAccountSWR } from "../api/useGetAccountSWR";

type AccountManagerProps = {
  open: boolean;
  onClose: () => void;
};

export const AccountManager: FC<AccountManagerProps> = (props) => {
  const { open, onClose } = props;
  const { data, mutate } = useGetAllAccountSWR();
  const popover = useKeywordPopover();

  const onOpenRegister = () => {
    popover.onOpen("REGISTER");
  };

  const onOpenDelete = () => {
    popover.onOpen("DELETE");
  };


  return (
    <>
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
              <AccountRegister onClick={onOpenRegister} />
              <AccountDelete onClick={onOpenDelete} />
            </div>
            <div className="act-list scroll-bar">
              <Accounts accounts={data} />
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
        {popover.open === "REGISTER" && (
          <AccountRegisterBranch
            open={!!popover.open}
            onClose={popover.onClose}
          />
        )}
      </Dialog>
    </>
  );
};
