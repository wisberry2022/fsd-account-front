import "./css/modify-slip.css";
import { SlipStatus } from "@/5.shared/types";
import { FC } from "react";

type ModifingSlipProps = {
  onChangeStatus: (status: SlipStatus) => void;
};

export const ModifingSlip: FC<ModifingSlipProps> = (props) => {
  const { onChangeStatus } = props;

  const onClick = () => {
    onChangeStatus("MODIFYING");
  };

  return (
    <button id="modify-slip" onClick={onClick}>
      전표 수정하기
    </button>
  );
};
