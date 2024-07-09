import { FC } from "react";
import "./css/SelectStatement.css";

export const SelectStatement: FC = () => {
  return (
    <select id="stt-select-box">
      <option>전표 종류를 선택하세요</option>
      <option>입금전표</option>
      <option>출금전표</option>
      <option>대체전표</option>
    </select>
  );
};
