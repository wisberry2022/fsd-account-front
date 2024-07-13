import { FC } from "react";
import { ModifyJournal } from "@/3.features/journal/";
import { getDateFormat } from "@/5.shared/utils";

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
