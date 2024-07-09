import "./css/journal.css";
import { FC } from "react";

type AddJournalProps = {
  addJournal: () => void;
};

export const AddJournal: FC<AddJournalProps> = (props) => {
  const { addJournal } = props;

  return (
    <button id="add-new-journal" onClick={addJournal}>
      분개장 추가하기
    </button>
  );
};
