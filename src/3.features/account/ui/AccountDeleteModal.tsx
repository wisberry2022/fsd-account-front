import { Paths } from "@/5.shared/constants";
import { OkCancelDialog } from "@/5.shared/ui";
import { FC } from "react";
import { useSWRConfig } from "swr";
import { deletes } from "../api/fetcher";

type AccountDeleteModalProps = {
  open: boolean;
  onClose: () => void;
  targets: number[];
};

export const AccountDeleteModal: FC<AccountDeleteModalProps> = (props) => {
  const { open, onClose, targets } = props;
  const { mutate } = useSWRConfig();

  const onDelete = async () => {
    await deletes(targets);
    mutate(Paths.basicInfo.accountSubject.getAll);
    onClose();
  };

  return (
    <OkCancelDialog
      open={open}
      onClose={onClose}
      content={`${targets.length}건의 계정과목을 삭제하시겠습니까?`}
      onClick={onDelete}
      width={60}
    />
  );
};
