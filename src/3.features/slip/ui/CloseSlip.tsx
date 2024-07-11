import "./css/close-slip.css";
import { FC } from "react";

type CloseSlipProps = {
  onChangeStatus: (status: "OPENED" | "CLOSED" | "MODIFYING") => void;
};

export const CloseSlip: FC<CloseSlipProps> = (props) => {
  const { onChangeStatus } = props;

  const onClosed = () => {
    onChangeStatus("CLOSED");
  };

  return (
    <button id="close-slip" onClick={onClosed}>
      전표 마무리하기
    </button>
  );
};
