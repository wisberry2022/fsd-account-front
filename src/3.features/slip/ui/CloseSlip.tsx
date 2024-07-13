import "./css/close-slip.css";
import { SlipStatus } from "@/5.shared/types";
import { FC } from "react";

type CloseSlipProps = {
  onChangeStatus: (status: SlipStatus) => void;
};

export const CloseSlip: FC<CloseSlipProps> = (props) => {
  const { onChangeStatus } = props;

  const onClick = () => {
    onChangeStatus("CLOSED");
  };

  return (
    <button id="close-slip" onClick={onClick}>
      전표 마감하기
    </button>
  );
};