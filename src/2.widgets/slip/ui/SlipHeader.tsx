import { CloseSlip } from "@/3.features/slip";
import { useSlipContext } from "@/5.shared/hooks";
import { FC } from "react";

export const SlipHeader: FC = () => {
  const { onChangeStatus, onChangeDate } = useSlipContext("receipt");

  return (
    <div id="slip-header">
      <div className="date-select">
        <label htmlFor="slip-date">일자 선택</label>
        <input id="slip-date" type="date" name="date" onChange={onChangeDate} />
      </div>
      <CloseSlip onChangeStatus={onChangeStatus} />
    </div>
  );
};
