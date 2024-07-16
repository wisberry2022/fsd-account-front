import "./act-reg-branch.css";
import { Dialog } from "@/5.shared/ui";
import { FC } from "react";
import {
  AutoRegister,
  DirectRegister,
  ExcelRegister,
} from "@/3.features/account";

type AccountRegisterBranchProps = {
  open: boolean;
  onClose: () => void;
};

const AccountRegisterBranch: FC<AccountRegisterBranchProps> = (props) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} width={80}>
      <Dialog.Body>
        <div className="branch-body">
          <DirectRegister onClick={() => {}} />
          <AutoRegister onClick={() => {}} />
          <ExcelRegister onClick={() => {}} />
        </div>
      </Dialog.Body>
    </Dialog>
  );
};

export default AccountRegisterBranch;
