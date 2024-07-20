import "./account.css";
import { AccountResponse } from "@/5.shared/types";
import { FC } from "react";
import { CategoryMapper } from "../libs/constants";

type AccountProps = {
  account: AccountResponse;
};

export const Account: FC<AccountProps> = (props) => {
  const { account } = props;

  return (
    <table id="act-tbl">
      <tbody>
        <tr className="category">
          <th className="tbl-head-color">분류</th>
          <td>{account && CategoryMapper[account.category]}</td>
          <th className="tbl-head-color">사용여부</th>
          <td>{account?.activated ? "사용" : "미사용"}</td>
        </tr>
        <tr>
          <th className="tbl-head-color">계정과목 이름</th>
          <td>{account?.name}</td>
          <th className="tbl-head-color">코드</th>
          <td>{account?.code}</td>
        </tr>
      </tbody>
    </table>
  );
};
