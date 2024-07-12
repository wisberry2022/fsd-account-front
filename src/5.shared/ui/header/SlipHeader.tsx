import "./slip-header.css";
import { ChangeEventHandler, FC, ReactNode } from "react";

type SlipHeaderProps = {
  onChangeDate: ChangeEventHandler<HTMLInputElement>;
  children: ReactNode;
};

export const SlipHeader: FC<SlipHeaderProps> = (props) => {
  const { onChangeDate, children } = props;
  return (
    <div id="slip-header">
      <div className="date-select">
        <label htmlFor="slip-date">일자 선택</label>
        <input id="slip-date" type="date" name="date" onChange={onChangeDate} />
      </div>
      {children}
    </div>
  );
};
