import "./act-list-tbl.css";
import { FC } from "react";

export const AccountListTable: FC = () => {
  return (
    <table id="fixed-act-list-tbl">
      <thead>
        <tr>
          <th className="tbl-head-color">대분류</th>
          <th className="tbl-head-color">중분류</th>
          <th className="tbl-head-color">소분류</th>
          <th className="tbl-head-color">계정과목명</th>
          <th className="tbl-head-color">코드</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 40 }).map((v, i) => (
          <tr key={i}>
            <td>자산</td>
            <td>유동자산</td>
            <td>당좌자산</td>
            <td>보통예금</td>
            <td>101-001</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
