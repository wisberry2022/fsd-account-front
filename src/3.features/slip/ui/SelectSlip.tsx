import { ChangeEventHandler, FC } from "react";
import "./css/select-slip.css";
import { Slip } from "@/5.shared/types";

type SelectSlipProps = {
  value: Slip;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export const SelectSlip: FC<SelectSlipProps> = (props) => {
  const { value, onChange } = props;
  return (
    <select id="slip-select-box" value={value} onChange={onChange}>
      <option value={""}>전표 종류를 선택하세요</option>
      <option value="RECEIPT">입금전표</option>
      <option value="WITHDRAWAL">출금전표</option>
      <option value="TRANSFER">대체전표</option>
    </select>
  );
};
