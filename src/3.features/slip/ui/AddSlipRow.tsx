import "./css/add-slip.css";
import { FC } from "react";

type AddSlipRowProps = {
  addEntry: () => void;
};

export const AddSlipRow: FC<AddSlipRowProps> = (props) => {
  const { addEntry } = props;
  return (
    <button id="add-slip-row" onClick={addEntry}>
      행 추가
    </button>
  );
};
