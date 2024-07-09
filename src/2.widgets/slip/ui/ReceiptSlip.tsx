import "./css/slip.css";
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
            <td className="subject-item">head2</td>
            <th className="credit slip-head-color">항목</th>
            <td className="credit-item">head4</td>
          </tr>
          <tr className="sub-head">
            <th colSpan={3} className="slip-head-color">
              적요
            </th>
            <th className="slip-head-color">금액</th>
          </tr>
          <tr className="desc">
            <td colSpan={3}>적요 내용</td>
            <td>30000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
