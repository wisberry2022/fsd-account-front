import "./css/transfer-slip.css";
import { FC } from "react";

export const TransferSlip: FC = () => {
  return (
    <div>
      <table id="slip">
        <thead>
          <tr>
            <th colSpan={3} className="slip-bg-color">
              차변
            </th>
            <th colSpan={3} className="slip-bg-color">
              대변
            </th>
          </tr>
          <tr>
            <th className="slip-bg-color">과목</th>
            <th className="slip-bg-color">적요</th>
            <th className="slip-bg-color">금액</th>
            <th className="slip-bg-color">과목</th>
            <th className="slip-bg-color">적요</th>
            <th className="slip-bg-color">금액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="credit">
              <input type="text" />
            </td>
            <td className="credit">
              <input type="text" />
            </td>
            <td className="credit">
              <input type="text" />
            </td>
            <td className="debit">
              <input type="text" />
            </td>
            <td className="debit">
              <input type="text" />
            </td>
            <td className="debit">
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
