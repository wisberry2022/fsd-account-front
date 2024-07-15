import { OkCancelDialog } from "@/5.shared/ui";
import { FC } from "react";

type SupplierDeleteDialogProps = {
  open: boolean;
  onClose: () => void;
};

export const SupplierDeleteDialog: FC<SupplierDeleteDialogProps> = (props) => {
  const { open, onClose } = props;

  return (
    <OkCancelDialog
      open={open}
      onClose={onClose}
      content={`N건의 거래처를 삭제하시겠습니까?`}
      onClick={() => onClose()}
      width={50}
    />
  );
};
