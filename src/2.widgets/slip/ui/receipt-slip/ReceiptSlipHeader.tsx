import { CloseSlip } from "@/3.features/slip";
import { FC } from "react";

export const ReceiptSlipHeader: FC = () => {
  return (
    <div id="rcpt-slip-header">
      <div className="date-select">
        <label htmlFor="rcpt-slip-date">일자 선택</label>
        <input id="rcpt-slip-date" type="date" name="date" />
      </div>
      <CloseSlip />
    </div>
  );
};
