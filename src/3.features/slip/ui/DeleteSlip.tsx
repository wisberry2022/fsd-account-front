import { OkCancelDialog } from "@/5.shared/ui";
import { FC } from "react";
import { deleteSlip } from "../api/fetcher";
import { useSWRConfig } from "swr";
import { Paths } from "@/5.shared/constants";

type DeleteSlipProps = {
  id: number | null;
  onClose: () => void;
  parentClose?: () => void;
};

export const DeleteSlip: FC<DeleteSlipProps> = (props) => {
  const { id, onClose, parentClose = () => {} } = props;
  const { mutate } = useSWRConfig();

  const onDelete = async () => {
    await deleteSlip(id as number);
    mutate(Paths.slip.getAll);
    parentClose();
  };

  return (
    <OkCancelDialog
      open={!!id}
      onClose={onClose}
      width={70}
      content={`삭제한 전표는 복구할 수 없습니다.
        삭제하시겠습니까?`}
      onClick={onDelete}
    />
  );
};
