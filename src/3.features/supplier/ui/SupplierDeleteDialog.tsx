import { OkCancelDialog } from "@/5.shared/ui";
import { FC } from "react";

type SupplierDeleteDialogProps = {
  open: boolean;
  count: number;
  onClose: () => void;
  onClick: () => void;
};

export const SupplierDeleteDialog: FC<SupplierDeleteDialogProps> = (props) => {
  const { open, onClose, count, onClick } = props;

  return (
    <OkCancelDialog
      open={open}
      onClose={onClose}
      content={`${count}건의 거래처를 삭제하시겠습니까?`}
      onClick={onClick}
      width={50}
    />
  );
};
