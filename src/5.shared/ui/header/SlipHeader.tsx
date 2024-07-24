import { getYYYYMMDDFormat } from "@/5.shared/utils";
import "./slip-header.css";
import { ChangeEventHandler, FC, ReactNode } from "react";

type SlipHeaderProps = {
  date: Date | null;
  onChangeDate: ChangeEventHandler<HTMLInputElement>;
  children: ReactNode;
};

export const SlipHeader: FC<SlipHeaderProps> = (props) => {
  const { date, onChangeDate, children } = props;

  return (
    <div id="slip-header">
      <div className="date-select">
        <label htmlFor="slip-date">일자 선택</label>
        <input
          id="slip-date"
          type="date"
          name="date"
          onChange={onChangeDate}
          value={getYYYYMMDDFormat(date)}
        />
      </div>
      {children}
    </div>
  );
};
