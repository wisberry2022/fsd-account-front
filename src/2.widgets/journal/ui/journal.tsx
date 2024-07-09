import "./css/index.css";
import { FC } from "react";
import { Entry } from "@/4.entities/entry";
import useJournalModal from "../model/journal-model";
import { AddEntry, DeleteEntry, FinishEntry } from "@/3.features/entry";
import JournalHeader from "./header/JournalHeader";
import { EntryModel } from "@/5.shared/types";

type JournalProps = {
  jnlSeq: number;
  deleteJournal: (seq: number) => void;
  entries: EntryModel[];
  closeJournal: (seq: number, entries: EntryModel[]) => void;
  onChangeDate: (seq: number, date: Date | null) => void;
};

export const Journal: FC<JournalProps> = (props) => {
  const { jnlSeq, deleteJournal, entries, closeJournal, onChangeDate } = props;
  const { state, addEntry, deleteEntry, onChangeEntry } =
    useJournalModal(entries);

  const onAddEntry = () => {
    const nextSeq = Math.max(...state.map((stt) => stt.seq)) + 1;
    addEntry(nextSeq);
  };

  return (
    <div className="journal-wdg">
      <JournalHeader
        jnlSeq={jnlSeq}
        deleteJournal={deleteJournal}
        onChangeDate={onChangeDate}
      />
      <table className="journal-tb">
        <thead>
          <tr>
            <th className="debit">차변</th>
            <th className="amount">금액</th>
            <th className="credit">대변</th>
            <th className="amount">금액</th>
            <th className="delete">삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.map((ent) => {
            return (
              <Entry
                key={ent.seq}
                seq={ent.seq}
                entry={ent}
                onChangeEntry={onChangeEntry}
              >
                {state.length > 1 && (
                  <DeleteEntry seq={ent.seq} deleteEntry={deleteEntry} />
                )}
              </Entry>
            );
          })}
        </tbody>
      </table>
      <div className="jnl-btn-box">
        <AddEntry onClick={onAddEntry} />
        <FinishEntry onClick={() => closeJournal(jnlSeq, state)} />
      </div>
    </div>
  );
};
