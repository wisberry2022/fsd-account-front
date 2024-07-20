import { AccountAddRequest } from "@/5.shared/types";
import { Dialog, OkCancelDialog } from "@/5.shared/ui";
import { FC } from "react";
import { autoAdd } from "../api/fetcher";
import { useSWRConfig } from "swr";
import { Paths } from "@/5.shared/constants";

type AccountAutoRegisterModalProps = {
  open: boolean;
  onClose: () => void;
  data: AccountAddRequest[];
};

export const AccountAutoRegisterModal: FC<AccountAutoRegisterModalProps> = (
  props
) => {
  const { open, onClose, data } = props;
  const { mutate } = useSWRConfig();

  const onAutoAdd = async () => {
    await autoAdd(data);
    mutate(Paths.basicInfo.accountSubject.getAll);
    onClose();
  };

  return (
    <OkCancelDialog
      open={open}
      onClose={onClose}
      content={`기존에 등록되어있는 계정과목이 있을경우 모두 삭제됩니다.
        자동등록하시겠습니까?`}
      onClick={onAutoAdd}
      color="blue"
      width={80}
    />
  );
};
