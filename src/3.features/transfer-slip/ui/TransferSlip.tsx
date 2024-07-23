import {
  useKeywordPopover,
  usePopover,
  useSlipContext,
} from "@/5.shared/hooks";
import "./transfer-slip.css";
import { ChangeEvent, FC, useState } from "react";
import { AccountResponse, TransferSlipContext } from "@/5.shared/types";
import { FaTrash } from "react-icons/fa";
import { PopupTriggerBox } from "@/5.shared/ui";
import { AccountSelectPopup } from "@/4.entities/account";

type Entry = {
  seq: number;
  name: string;
};

export const TransferSlip: FC = () => {
  const { slip, onChangeEntry, onChangeSubject, deleteEntry } = useSlipContext(
    "TRANSFER"
  ) as TransferSlipContext;

  const onChange = (seq: number, e: ChangeEvent<HTMLInputElement>) => {
    const { dataset, name, value } = e.target;
    const { ledger } = dataset;

    // ToDo: Number.parseInt 시 0.5와 같은 소수점 입력 불가
    onChangeEntry(
      seq,
      ledger as "debit" | "credit",
      name,
      name === "amount" ? Number.parseInt(value) : value
    );
  };

  const popover = useKeywordPopover();
  const [debit, setDebit] = useState<Entry>({ seq: 0, name: "" });
  const [credit, setCredit] = useState<Entry>({ seq: 0, name: "" });

  const onDebitOpen = (seq: number) => {
    popover.onOpen("debit");
    setDebit((prev) => ({
      ...prev,
      seq: seq,
    }));
  };

  const onCreditOpen = (seq: number) => {
    popover.onOpen("credit");
    setCredit((prev) => ({
      ...prev,
      seq: seq,
    }));
  };

  const onChangeDebit = (seq: number, id: number, name: string) => {
    onChangeSubject(seq, "debit", id, name);
  };

  const onChangeCredit = (seq: number, id: number, name: string) => {
    onChangeSubject(seq, "credit", id, name);
  };

  const onConfirm = (value: AccountResponse) => {
    if (popover.open === "debit") {
      onChangeDebit(debit.seq, value.id, value.name);
    }
    if (popover.open === "credit") {
      onChangeCredit(credit.seq, value.id, value.name);
    }
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
                  <PopupTriggerBox
                    onClick={() => onDebitOpen(ent.seq)}
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
                  <PopupTriggerBox
                    onClick={() => onCreditOpen(ent.seq)}
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
      {
        <AccountSelectPopup
          open={!!popover.open}
          onClose={popover.onClose}
          onConfirm={onConfirm}
        />
      }
    </div>
  );
};
