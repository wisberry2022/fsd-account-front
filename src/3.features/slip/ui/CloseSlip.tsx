import { usePopover } from "@/5.shared/hooks";
import "./css/close-slip.css";
import { SlipStatus } from "@/5.shared/types";
import { FC } from "react";
import { OkCancelDialog } from "@/5.shared/ui";

type CloseSlipProps = {
  init: () => void;
  onChangeStatus: (status: SlipStatus) => void;
};

export const CloseSlip: FC<CloseSlipProps> = (props) => {
  const { init, onChangeStatus } = props;
  const popover = usePopover();

  const onClick = () => {
    popover.onOpen();
  };

  const onCloseSlip = () => {
    onChangeStatus("CLOSED");
    init();
  };

  return (
    <>
      <button id="close-slip" onClick={onClick}>
        전표 마감하기
      </button>
      <OkCancelDialog
        open={popover.open}
        onClose={popover.onClose}
        content={`마감한 전표는 전표 목록에서 수정/삭제할 수 있습니다.
          마감하시겠습니까?`}
        onClick={onCloseSlip}
      />
    </>
  );
};
