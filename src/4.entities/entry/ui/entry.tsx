import { ChangeEventHandler, FC, ReactNode } from "react";
import "./css/entry.css";
import { EntryModel } from "@/5.shared/types";

type EntryProps = {
  children: ReactNode;
  seq: number;
  entry: EntryModel;
  onChangeEntry: (seq: number, name: string, value: string) => void;
};

export const Entry: FC<EntryProps> = (props) => {
  const { children, seq, entry, onChangeEntry } = props;

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    onChangeEntry(seq, name, value);
  };

  return (
    <tr className="entry">
      <td className="debit">
        <input
          type="text"
          name="debit"
          onChange={onChange}
          value={entry.debit}
          placeholder="차변 계정과목을 입력하세요."
        />
      </td>
      <td className="amount">
        <input
          type="text"
          name="debitAmount"
          value={entry.debitAmount ?? ""}
          onChange={onChange}
          placeholder="차변 금액을 입력하세요."
        />
      </td>
      <td className="credit">
        <input
          type="text"
          name="credit"
          value={entry.credit}
          onChange={onChange}
          placeholder="대변 계정과목을 입력하세요."
        />
      </td>
      <td className="amount">
        <input
          type="text"
          name="creditAmount"
          value={entry.creditAmount ?? ""}
          onChange={onChange}
          placeholder="대변 금액을 입력하세요."
        />
      </td>
      {children && <td className="delete">{children}</td>}
    </tr>
  );
};
