import "./suppliers.css";
import { FC } from "react";

export const Suppliers: FC = () => {
  return (
    <table id="sply-tbl">
      <thead>
        <tr>
          <th className="check tbl-head-color">
            <input type="checkbox" />
          </th>
          <th className="seq tbl-head-color">No</th>
          <th className="name tbl-head-color">거래처명</th>
          <th className="repr tbl-head-color">대표자</th>
          <th className="reg-dttm tbl-head-color">등록일자</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>1</td>
          <td>무한상사</td>
          <td>김무한</td>
          <td>2024-05-05</td>
        </tr>
      </tbody>
    </table>
  );
};
