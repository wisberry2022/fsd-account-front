import { FC } from "react";
import "./css/index.css";
import { JournalModel } from "@/1.pages/journal/libs/types";
import ClosedJournalHeader from "./header/ClosedJournalHeader";
import { ReadOnlyEntry } from "@/4.entities/entry";
import { EntryModel } from "@/5.shared/types";
import { getSpan } from "../libs/utils";

const getDebitSpan = (entries: EntryModel[], entry: EntryModel): number => {
  return getSpan(entries, entry, "debit");
};

const getCreditSpan = (entries: EntryModel[], entry: EntryModel): number => {
  return getSpan(entries, entry, "credit");
};

type ClosedJournalProps = {
  journal: JournalModel;
  modifyJournal: (seq: number) => void;
};

export const ClosedJournal: FC<ClosedJournalProps> = (props) => {
  const { journal, modifyJournal } = props;
  return (
    <div className="journal-wdg closed">
      <ClosedJournalHeader seq={journal.seq} date={journal.date} modifyJournal={modifyJournal} />
      <table className="journal-tb">
        <thead>
          <tr>
            <th className="debit">차변</th>
            <th className="amount">금액</th>
            <th className="credit">대변</th>
            <th className="amount">금액</th>
          </tr>
        </thead>
        <tbody>
          {journal.entries.map((entry) => (
            <ReadOnlyEntry
              key={entry.seq}
              entry={entry}
              debitSpan={getDebitSpan(journal.entries, entry)}
              creditSpan={getCreditSpan(journal.entries, entry)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
