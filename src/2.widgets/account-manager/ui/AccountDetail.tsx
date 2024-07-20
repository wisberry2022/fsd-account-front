import { Dialog } from "@/5.shared/ui";
import { FC, useState } from "react";
import { useGetAccountSWR } from "../api/useGetAccountSWR";
import { Account, AccountRegisterTable } from "@/4.entities/account";
import { AccountResponse } from "@/5.shared/types";
import { useDataHandler } from "@/5.shared/hooks";
import { AccountRegister } from "@/3.features/account";
import { modify } from "../api/fetcher";
import { useSWRConfig } from "swr";
import { Paths } from "@/5.shared/constants";

type AccountDetailProps = {
  id: number;
  open: boolean;
  onClose: () => void;
};

const AccountDetail: FC<AccountDetailProps> = (props) => {
  const { id, open, onClose } = props;
  const { data } = useGetAccountSWR(id);
  const handler = useDataHandler<AccountResponse>(
    data ?? ({} as AccountResponse)
  );

  const [state, setState] = useState("detail");

  const setModify = () => {
    setState("modify");
  };

  const { mutate } = useSWRConfig();

  const onModify = async () => {
    await modify(id, handler.state);
    mutate(Paths.basicInfo.accountSubject.get);
    setState("detail");
  };

  return (
    <Dialog open={open} onClose={onClose} width={70}>
      <Dialog.Header>
        <div className="left">
          <h3>{data?.name}</h3>
        </div>
        <div className="right"></div>
      </Dialog.Header>
      <Dialog.Body>
        <div className="act-tbl-area">
          {state === "detail" && (
            <Account account={data ?? ({} as AccountResponse)} />
          )}
          {state === "modify" && (
            <AccountRegisterTable
              account={handler.state}
              onChangeInput={handler.onChangeInput}
              onRadio={handler.onRadioBoolean}
              onSelect={handler.onSelect}
            />
          )}
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          {state === "detail" && (
            <>
              <button onClick={onClose}>메인으로</button>
              <button className="btn-sky-white" onClick={setModify}>
                수정하기
              </button>
            </>
          )}
          {state === "modify" && (
            <>
              <button onClick={onClose}>취소</button>
              <button className="btn-sky-white" onClick={onModify}>
                수정하기
              </button>
            </>
          )}
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};

export default AccountDetail;
