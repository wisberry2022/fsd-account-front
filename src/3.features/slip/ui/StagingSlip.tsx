import { SlipStatus } from "@/5.shared/types";
import "./css/stage-slip.css";
import { FC } from "react";

type StaingSlipProps = {
  onChangeStatus: (status: SlipStatus) => void;
};

export const StaingSlip: FC<StaingSlipProps> = (props) => {
  const { onChangeStatus } = props;

  const onClosed = () => {
    onChangeStatus("STAGING");
  };

  return (
    <button id="stage-slip" onClick={onClosed}>
      전표 입력하기
    </button>
  );
};
