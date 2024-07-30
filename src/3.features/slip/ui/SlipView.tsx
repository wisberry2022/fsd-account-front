import { BasicSlipPreview, TransferSlipPreview } from "@/4.entities/preview";
import { Dialog } from "@/5.shared/ui";
import { FC } from "react";
import { useGetSlip } from "../api/useGetSlipSWR";
import "./css/slip-view.css";
import { PaperSlip, TransferSlip } from "@/5.shared/types";

type SlipViewProps = {
  id: number;
  onClose: () => void;
};

export const SlipView: FC<SlipViewProps> = (props) => {
  const { id, onClose } = props;
  const { data: slip } = useGetSlip(id);

  return (
    <Dialog
      open={!!id}
      onClose={onClose}
      width={slip?.slip === "TRANSFER" ? 70 : 50}
    >
      <Dialog.Header>
        <h3>전표 상세보기 - No. {id}</h3>
      </Dialog.Header>
      <Dialog.Body>
        <div id="slip-view-body">
          {slip?.slip === "TRANSFER" ? (
            <TransferSlipPreview slip={slip as TransferSlip} />
          ) : (
            <BasicSlipPreview slip={slip as PaperSlip} />
          )}
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          <button onClick={onClose}>닫기</button>
          <button className="btn-sky-white">수정하기</button>
          <button className="btn-red-white">전표 삭제하기</button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};
