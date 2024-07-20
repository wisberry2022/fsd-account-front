import { AccountResponse } from "@/5.shared/types";
import "./accounts.css";
import { FC } from "react";
import { convert2DateFormat } from "@/5.shared/utils";

type AccountsProps = {
  accounts: AccountResponse[] | undefined;
};

export const Accounts: FC<AccountsProps> = (props) => {
  const { accounts } = props;
  return (
    <table id="act-list-tbl">
      <thead>
        <tr>
          <th className="tbl-head-color check">
            <input type="checkbox" />
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
                <input type="checkbox" />
              </td>
              <td>{act.id}</td>
              <td>{act.code}</td>
              <td>{act.name}</td>
              <td>{convert2DateFormat(act.regDttm)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
