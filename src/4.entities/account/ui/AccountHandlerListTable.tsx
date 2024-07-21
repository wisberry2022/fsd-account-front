import { AccountResponse } from "@/5.shared/types";
import { FC } from "react";
import { CategoryMapper } from "../libs/constants";
import "./act-hdl-list-tbl.css";

type AccountHandlerListTableProps = {
  accounts: AccountResponse[];
  onSelect: (account: AccountResponse) => void;
};

export const AccountHandlerListTable: FC<AccountHandlerListTableProps> = (
  props
) => {
  const { accounts, onSelect } = props;

  return (
    <table id="fixed-act-hdl-list-tbl">
      <thead>
        <tr>
          <th className="radio tbl-head-color"></th>
          <th className="tbl-head-color">분류</th>
          <th className="tbl-head-color">계정과목명</th>
          <th className="tbl-head-color">코드</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((act) => (
          <tr key={act.code}>
            <td>
              <input
                type="radio"
                name="select"
                onChange={() => onSelect(act)}
              />
            </td>
            <td>{CategoryMapper[act.category]}</td>
            <td>{act.name}</td>
            <td>{act.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
