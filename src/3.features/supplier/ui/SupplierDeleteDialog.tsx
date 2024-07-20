import { OkCancelDialog } from "@/5.shared/ui";
import { FC } from "react";
import { deletes } from "../api/fetcher";
import { useSWRConfig } from "swr";
import { Paths } from "@/5.shared/constants";

type SupplierDeleteDialogProps = {
  open: boolean;
  checks: number[];
  onClose: () => void;
  // onClick: () => void;
};

export const SupplierDeleteDialog: FC<SupplierDeleteDialogProps> = (props) => {
  const { open, onClose, checks } = props;
  const { mutate } = useSWRConfig();

  const onDelete = async () => {
    await deletes(checks);
    mutate(Paths.basicInfo.supplier.getAll);
    onClose();
  };

  return (
    <OkCancelDialog
      open={open}
      onClose={onClose}
      content={`${checks.length}건의 거래처를 삭제하시겠습니까?`}
      onClick={onDelete}
      width={50}
    />
  );
};
