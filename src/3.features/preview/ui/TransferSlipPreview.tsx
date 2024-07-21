import "./transfer-slip.css";
import { useSlipContext } from "@/5.shared/hooks";
import { TransferSlipContext } from "@/5.shared/types";
import { getDateFormat } from "@/5.shared/utils";
import { FC } from "react";

export const TransferSlipPreview: FC = () => {
  const { slip } = useSlipContext("TRANSFER") as TransferSlipContext;

  return (
    <div id="preview-body">
      <table id="transfer-slip-preview">
        <thead>
          <tr>
            <th colSpan={6} className="slip-bg-color">
              <div className="pre-title">
                <h2>대체전표</h2>
                <strong>{getDateFormat(slip.date)}</strong>
              </div>
            </th>
          </tr>
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
          {slip.entries.map((ent) => {
            return (
              <tr key={ent.seq}>
                <td className={`debit ${!ent.debit.subject && "empty"}`}>
                  {ent.debit.subject}
                </td>
                <td className={`debit ${!ent.debit.desc && "empty"}`}>
                  {ent.debit.desc}
                </td>
                <td className={`debit ${!ent.debit.amount && "empty"}`}>
                  {ent.debit.amount ? ent.debit.amount : ""}
                </td>
                <td className={`credit ${!ent.credit.subject && "empty"}`}>
                  {ent.credit.subject}
                </td>
                <td className={`credit ${!ent.credit.desc && "empty"}`}>
                  {ent.credit.desc}
                </td>
                <td className={`credit ${!ent.credit.amount && "empty"}`}>
                  {ent.credit.amount ? ent.credit.amount : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={2} className="totAmt slip-bg-color">
              합계
            </th>
            <td>
              {slip.entries.reduce((acc, cur) => (acc += cur.debit.amount), 0)}
              원
            </td>
            <th colSpan={2} className="totAmt slip-bg-color">
              합계
            </th>
            <td>
              {slip.entries.reduce((acc, cur) => (acc += cur.credit.amount), 0)}
              원
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
