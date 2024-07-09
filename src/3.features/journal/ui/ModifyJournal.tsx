import "./css/journal.css";
import { FC } from "react";

type ModifyJournalProps = {
  seq: number;
  onClick: (seq: number) => void;
};

export const ModifyJournal: FC<ModifyJournalProps> = (props) => {
  const { seq, onClick } = props;
  return (
    <button id="modify-journal" onClick={() => onClick(seq)}>
      분개장 수정하기
    </button>
  );
};
