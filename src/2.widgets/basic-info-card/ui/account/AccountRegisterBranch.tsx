import "./act-reg-branch.css";
import { Dialog } from "@/5.shared/ui";
import { FC } from "react";
import {
  AutoRegister,
  DirectRegister,
  ExcelRegister,
} from "@/3.features/account";
import { useKeywordPopover } from "@/5.shared/hooks";
import DirectRegisterDialog from "./register/DirectRegisterDialog";
import AutoRegisterDialog from "./register/AutoRegisterDialog";
import ExcelRegisterDialog from "./register/ExcelRegisterDialog";

type AccountRegisterBranchProps = {
  open: boolean;
  onClose: () => void;
};

const AccountRegisterBranch: FC<AccountRegisterBranchProps> = (props) => {
  const { open, onClose } = props;
  const popover = useKeywordPopover<string>();

  const onDirect = () => {
    popover.onOpen("DIRECT");
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} width={80}>
        <Dialog.Body>
          <div className="branch-body">
            <DirectRegister onClick={onDirect} />
            <AutoRegister onClick={() => popover.onOpen("AUTO")} />
            <ExcelRegister onClick={() => popover.onOpen("EXCEL")} />
          </div>
        </Dialog.Body>
        {popover.open === "DIRECT" && (
          <DirectRegisterDialog open={!!open} onClose={popover.onClose} />
        )}
        {popover.open === "AUTO" && (
          <AutoRegisterDialog open={!!open} onClose={popover.onClose} />
        )}
        {popover.open === "EXCEL" && (
          <ExcelRegisterDialog open={!!open} onClose={popover.onClose} />
        )}
      </Dialog>
    </>
  );
};

export default AccountRegisterBranch;
