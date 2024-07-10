import { CloseSlip } from "@/3.features/slip";
import { FC } from "react";

export const SlipHeader: FC = () => {
  return (
    <div id="slip-header">
      <div className="date-select">
        <label htmlFor="slip-date">일자 선택</label>
        <input id="slip-date" type="date" name="date" />
      </div>
      <CloseSlip />
    </div>
  );
};
