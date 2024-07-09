import { DeleteJournal } from "@/3.features/journal";
import { ChangeEventHandler, FC } from "react";

type JournalHeaderProps = {
  jnlSeq: number;
  deleteJournal: (seq: number) => void;
  onChangeDate: (seq: number, date: Date | null) => void;
};

const JournalHeader: FC<JournalHeaderProps> = (props) => {
  const { onChangeDate, ...deleteHandler } = props;

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeDate(deleteHandler.jnlSeq, e.target.valueAsDate);
  };

  return (
    <div className="journal-header">
      <div className="journal-date-select">
        <label htmlFor="journal">일자 선택</label>
        <input id="journal" type="date" onChange={onChange} />
      </div>
      <div>
        <DeleteJournal {...deleteHandler} />
      </div>
    </div>
  );
};

export default JournalHeader;
