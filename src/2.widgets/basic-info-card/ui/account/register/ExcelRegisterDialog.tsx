import { ExcelUpload, FormDownload, Reset } from "@/3.features/excel";
import "./excel-reg-body.css";
import { AccountListTable } from "@/4.entities/account";
import { Dialog } from "@/5.shared/ui";
import { FC } from "react";

type ExcelRegisterDialogProps = {
  open: boolean;
  onClose: () => void;
};

const ExcelRegisterDialog: FC<ExcelRegisterDialogProps> = (props) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} width={100}>
      <Dialog.Header>
        <div className="left">
          <h4>엑셀 등록</h4>
        </div>
      </Dialog.Header>
      <Dialog.Body>
        <div className="excel-reg-body scroll-bar">
          <div className="top-btn-box">
            <FormDownload onClick={() => {}} />
            <ExcelUpload onClick={() => {}} />
            <Reset onClick={() => {}} />
          </div>
          <div className="act-excel-list">
            <AccountListTable />
          </div>
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          <button onClick={onClose}>취소</button>
          <button onClick={() => {}} className="btn-sky-white">
            저장
          </button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};

export default ExcelRegisterDialog;
