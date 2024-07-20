import { AccountAddRequest } from "@/5.shared/types";
import "./act-list-tbl.css";
import { FC } from "react";
import { CategoryMapper } from "../libs/constants";

type AccountListTableProps = {
  accounts: AccountAddRequest[];
};

export const AccountListTable: FC<AccountListTableProps> = (props) => {
  const { accounts } = props;

  return (
    <table id="fixed-act-list-tbl">
      <thead>
        <tr>
          <th className="tbl-head-color">분류</th>
          <th className="tbl-head-color">계정과목명</th>
          <th className="tbl-head-color">코드</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((act) => (
          <tr key={act.code}>
            <td>{CategoryMapper[act.category]}</td>
            <td>{act.name}</td>
            <td>{act.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
