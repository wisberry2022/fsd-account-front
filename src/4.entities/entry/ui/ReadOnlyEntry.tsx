import { EntryModel } from "@/5.shared/types";
import { FC } from "react";

type ReadOnlyEntryProps = {
  entry: EntryModel;
  debitSpan?: number;
  creditSpan?: number;
};

export const ReadOnlyEntry: FC<ReadOnlyEntryProps> = (props) => {
  const { entry, debitSpan = 0, creditSpan = 0 } = props;

  return (
    <tr className="entry">
      {debitSpan ? (
        <td className="debit" rowSpan={debitSpan}>
          <strong>{entry.debit}</strong>
        </td>
      ) : null}
      {debitSpan ? (
        <td className="amount" rowSpan={debitSpan}>
          <strong>{entry.debitAmount}</strong>
        </td>
      ) : null}
      {creditSpan ? (
        <td className="credit" rowSpan={creditSpan}>
          <strong>{entry.credit}</strong>
        </td>
      ) : null}
      {creditSpan ? (
        <td className="amount" rowSpan={creditSpan}>
          <strong>{entry.creditAmount}</strong>
        </td>
      ) : null}
    </tr>
  );
};
