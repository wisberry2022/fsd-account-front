import "./act-reg-tbl.css";
import { FC } from "react";

export const AccountRegisterTable: FC = () => {
  return (
    <table id="act-reg-tbl">
      <tbody>
        <tr className="category">
          <th className="tbl-head-color">대분류</th>
          <td className="select-td" colSpan={3}>
            <select className="act-category">
              <option>자산</option>
              <option>부채</option>
              <option>자본</option>
              <option>수익</option>
              <option>비용</option>
            </select>
          </td>
        </tr>
        <tr>
          <th className="tbl-head-color">계정과목 이름</th>
          <td>
            <input type="text" />
          </td>
          <th className="tbl-head-color">코드</th>
          <td>
            <input type="text" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
