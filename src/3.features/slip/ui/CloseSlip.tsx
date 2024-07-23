import { usePopover } from "@/5.shared/hooks";
import "./css/close-slip.css";
import { PaperSlip, SlipStatus, TransferSlip } from "@/5.shared/types";
import { FC } from "react";
import { OkCancelDialog } from "@/5.shared/ui";
import {
  toReceiptSlipRequest,
  toWithdrawalSlipRequest,
} from "../libs/converter";
import { write } from "../api/fetcher";

type CloseSlipProps = {
  slip: PaperSlip | TransferSlip;
  init: () => void;
  onChangeStatus: (status: SlipStatus) => void;
};

export const CloseSlip: FC<CloseSlipProps> = (props) => {
  const { slip, init, onChangeStatus } = props;
  const popover = usePopover();

  const onClick = () => {
    popover.onOpen();
  };

  const onCloseSlip = async () => {
    onChangeStatus("CLOSED");
    if (slip.slip === "RECEIPT") {
      const sendData = toReceiptSlipRequest(slip as PaperSlip);
      await write(sendData);
    }
    if (slip.slip === "WITHDRAWAL") {
      const sendData = toWithdrawalSlipRequest(slip as PaperSlip);
      await write(sendData);
    }
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
