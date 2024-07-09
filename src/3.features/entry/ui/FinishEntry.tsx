import "./css/entry.css";
import { FC } from "react";

type FinishEntryProps = {
  onClick: () => void;
};

export const FinishEntry: FC<FinishEntryProps> = (props) => {
  const { onClick } = props;
  return (
    <button id="finish-entry" onClick={onClick}>
      분개 완료하기
    </button>
  );
};
