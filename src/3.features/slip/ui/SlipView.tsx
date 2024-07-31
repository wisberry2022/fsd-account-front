import { BasicSlipPreview, TransferSlipPreview } from "@/4.entities/preview";
import { useKeywordPopover } from "@/5.shared/hooks";
import { PaperSlip, TransferSlip } from "@/5.shared/types";
import { Dialog } from "@/5.shared/ui";
import { FC, useEffect } from "react";
import { useGetSlip } from "../api/useGetSlipSWR";
import BasicModifySlip from "./BasicModifySlip";
import "./css/slip-view.css";
import { DeleteSlip } from "./DeleteSlip";

type SlipViewProps = {
  id: number;
  onClose: () => void;
};

export const SlipView: FC<SlipViewProps> = (props) => {
  const { id, onClose } = props;
  const { data: slip } = useGetSlip(id);
  const popover = useKeywordPopover<number>();
  const detailPop = useKeywordPopover<number>();

  const onDetail = () => {
    detailPop.onOpen(id);
  };

  const onDelete = () => {
    popover.onOpen(id);
  };

  useEffect(() => {
    return () => detailPop.onClose();
  }, []);

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
          ) : detailPop.open ? (
            <BasicModifySlip slip={slip as PaperSlip} />
          ) : (
            <BasicSlipPreview slip={slip as PaperSlip} />
          )}
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          <button onClick={detailPop.open ? detailPop.onClose : onClose}>
            닫기
          </button>
          <button className="btn-sky-white" onClick={onDetail}>
            수정하기
          </button>
          <button className="btn-red-white" onClick={onDelete}>
            전표 삭제하기
          </button>
        </div>
      </Dialog.Footer>
      <DeleteSlip
        id={popover.open}
        onClose={popover.onClose}
        parentClose={onClose}
      />
    </Dialog>
  );
};
