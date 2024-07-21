import { useSlipContext } from "@/5.shared/hooks";
import "./transfer-slip.css";
import { ChangeEvent, FC } from "react";
import { TransferSlipContext } from "@/5.shared/types";
import { FaTrash } from "react-icons/fa";

export const TransferSlip: FC = () => {
  const { slip, onChangeEntry, deleteEntry } = useSlipContext(
    "TRANSFER"
  ) as TransferSlipContext;

  const onChange = (seq: number, e: ChangeEvent<HTMLInputElement>) => {
    const { dataset, name, value } = e.target;
    const { ledger } = dataset;

    onChangeEntry(
      seq,
      ledger as "debit" | "credit",
      name,
      name === "amount" ? Number.parseInt(value) : value
    );
  };

  return (
    <div>
      <table id="slip">
        <thead>
          <tr>
            <th colSpan={3} className="slip-bg-color">
              차변
            </th>
            <th colSpan={4} className="slip-bg-color">
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
            <th className="delete slip-bg-color">삭제</th>
          </tr>
        </thead>
        <tbody>
          {slip.entries.map((ent) => {
            return (
              <tr key={ent.seq}>
                <td className="debit">
                  <input
                    type="text"
                    data-ledger="debit"
                    name="subject"
                    onChange={(e) => onChange(ent.seq, e)}
                    value={ent.debit.subject}
                  />
                </td>
                <td className="debit">
                  <input
                    type="text"
                    data-ledger="debit"
                    name="desc"
                    onChange={(e) => onChange(ent.seq, e)}
                    value={ent.debit.desc}
                  />
                </td>
                <td className="debit">
                  <input
                    type="text"
                    data-ledger="debit"
                    name="amount"
                    onChange={(e) => onChange(ent.seq, e)}
                    value={ent.debit.amount || ""}
                  />
                </td>
                <td className="credit">
                  <input
                    type="text"
                    data-ledger="credit"
                    name="subject"
                    onChange={(e) => onChange(ent.seq, e)}
                    value={ent.credit.subject}
                  />
                </td>
                <td className="credit">
                  <input
                    type="text"
                    data-ledger="credit"
                    name="desc"
                    onChange={(e) => onChange(ent.seq, e)}
                    value={ent.credit.desc}
                  />
                </td>
                <td className="credit">
                  <input
                    type="text"
                    data-ledger="credit"
                    name="amount"
                    onChange={(e) => onChange(ent.seq, e)}
                    value={ent.credit.amount || ""}
                  />
                </td>
                <td className="remove">
                  {slip.entries.length > 1 && (
                    <FaTrash
                      id="remove-icon"
                      onClick={() => deleteEntry(ent.seq)}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
