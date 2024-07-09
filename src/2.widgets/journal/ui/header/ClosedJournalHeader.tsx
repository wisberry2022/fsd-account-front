import { FC } from "react";
import { getDateFormat } from "../../libs/utils";
import { ModifyJournal } from "@/3.features/journal/";

type ClosedJournalHeaderProps = {
  seq: number;
  date: Date | null;
  modifyJournal: (seq: number) => void;
};

const ClosedJournalHeader: FC<ClosedJournalHeaderProps> = (props) => {
  const { seq, date, modifyJournal } = props;

  const dateVal = getDateFormat(date);

  return (
    <div className="journal-header">
      <div className="journal-date-select">
        <strong id="date-format">{dateVal}</strong>
      </div>
      <ModifyJournal seq={seq} onClick={modifyJournal} />
    </div>
  );
};

export default ClosedJournalHeader;
