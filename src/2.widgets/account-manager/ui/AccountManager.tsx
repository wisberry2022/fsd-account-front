import { AccountDelete, AccountRegister } from "@/3.features/account";
import { Accounts } from "@/4.entities/account";
import { useKeywordPopover } from "@/5.shared/hooks";
import { Dialog } from "@/5.shared/ui";
import { FC, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useGetAllAccountSWR } from "../api/useGetAccountSWR";
import "./account-manager.css";
import AccountDetail from "./AccountDetail";
import AccountRegisterBranch from "./register/AccountRegisterBranch";

type AccountManagerProps = {
  open: boolean;
  onClose: () => void;
};

export const AccountManager: FC<AccountManagerProps> = (props) => {
  const { open, onClose } = props;
  const { data } = useGetAllAccountSWR();
  const popover = useKeywordPopover();

  const onOpenRegister = () => {
    popover.onOpen("REGISTER");
  };

  const onOpenDelete = () => {
    popover.onOpen("DELETE");
  };

  const [detail, setDetail] = useState<number>(0);

  const onOpenDetail = (id: number) => {
    popover.onOpen("DETAIL");
    setDetail(id);
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
              <Accounts accounts={data} onRowClick={onOpenDetail} />
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
        {popover.open === "DETAIL" && (
          <AccountDetail
            id={detail}
            onClose={popover.onClose}
            open={!!popover.open}
          />
        )}
      </Dialog>
    </>
  );
};
