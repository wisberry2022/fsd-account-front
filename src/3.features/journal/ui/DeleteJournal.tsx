import "./css/journal.css";
import { FC } from "react";

type DeleteJournalProps = {
  jnlSeq: number;
  deleteJournal: (seq: number) => void;
};

export const DeleteJournal: FC<DeleteJournalProps> = (props) => {
  const { jnlSeq, deleteJournal } = props;

  return (
    <button id="delete-journal" onClick={() => deleteJournal(jnlSeq)}>
      분개장 삭제하기
    </button>
  );
};
