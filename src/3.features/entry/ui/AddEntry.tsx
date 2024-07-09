import { FC } from "react";
import "./css/entry.css";

type AddEntryProps = {
  onClick: () => void;
};

export const AddEntry: FC<AddEntryProps> = (props) => {
  const { onClick } = props;
  return (
    <button id="add-entry" onClick={onClick}>
      추가 분개하기
    </button>
  );
};
