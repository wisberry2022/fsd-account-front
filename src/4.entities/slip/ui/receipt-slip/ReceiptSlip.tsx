import "./css/receipt-slip.css";
import { FC } from "react";

export const ReceiptSlip: FC = () => {
  return (
    <div>
      <table className="receipt-slip">
        <thead>
          <tr>
            <th colSpan={4} className="slip-head-color">
              입금전표
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="subject slip-head-color">과목</th>
            <td className="subject-item">
              <input type="text" name="subject" className="slip-input" />
            </td>
            <th className="credit slip-head-color">항목</th>
            <td className="credit-item">
              <input type="text" name="credit" className="slip-input" />
            </td>
          </tr>
          <tr className="sub-head">
            <th colSpan={3} className="slip-head-color">
              적요
            </th>
            <th className="slip-head-color">금액</th>
          </tr>
          <tr className="content">
            <td colSpan={3}>
              <input name="desc" type="text" className="slip-input" />
            </td>
            <td>
              <input name="amount" type="text" className="slip-input" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
