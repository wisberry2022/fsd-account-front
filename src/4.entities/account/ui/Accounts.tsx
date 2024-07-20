import { AccountResponse } from "@/5.shared/types";
import "./accounts.css";
import { ChangeEventHandler, Dispatch, FC, SetStateAction } from "react";
import { convert2DateFormat } from "@/5.shared/utils";

type AccountsProps = {
  accounts: AccountResponse[] | undefined;
  onRowClick: (id: number) => void;
  checks: number[];
  setCheck: Dispatch<SetStateAction<number[]>>;
};

export const Accounts: FC<AccountsProps> = (props) => {
  const { accounts, onRowClick, checks, setCheck } = props;

  const onCheck = (id:number, checked:boolean) => {
    setCheck(prev => {
      if(checked) return prev.concat(id);
      return prev.filter(pre => pre !== id);
    })
  }

  const allCheck:ChangeEventHandler<HTMLInputElement> = (e) => {
    const {checked} = e.target;
    setCheck(checked ? accounts?.map(act => act.id) as number[] : []);
  }

  return (
    <table id="act-list-tbl">
      <thead>
        <tr>
          <th className="tbl-head-color check">
            <input type="checkbox" onChange={allCheck} />
          </th>
          <th className="tbl-head-color seq">No</th>
          <th className="tbl-head-color code">코드</th>
          <th className="tbl-head-color name">계정과목 이름</th>
          <th className="tbl-head-color reg-dttm">등록일</th>
        </tr>
      </thead>
      <tbody>
        {accounts?.map((act) => {
          return (
            <tr key={act.id}>
              <td>
                <input type="checkbox" checked={checks.includes(act.id)} onChange={(e) => onCheck(act.id, e.target.checked)} />
              </td>
              <td onClick={() => onRowClick(act.id)}>{act.id}</td>
              <td onClick={() => onRowClick(act.id)}>{act.code}</td>
              <td onClick={() => onRowClick(act.id)}>{act.name}</td>
              <td onClick={() => onRowClick(act.id)}>
                {convert2DateFormat(act.regDttm)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
