import { BasicSlipPreview, TransferSlipPreview } from "@/4.entities/preview";
import { useKeywordPopover } from "@/5.shared/hooks";
import { BasicSlip, PaperSlip, TransferSlip } from "@/5.shared/types";
import { Dialog } from "@/5.shared/ui";
import { FC } from "react";
import { update } from "../api/fetcher";
import { useGetSlip } from "../api/useGetSlipSWR";
import { useSlipHandler } from "../libs/useSlipHandler";
import BasicModifySlip from "./BasicModifySlip";
import "./css/slip-view.css";
import { DeleteSlip } from "./DeleteSlip";
import { ModifyTransferSlip } from "./ModifyTransferSlip";
import { useSWRConfig } from "swr";
import { Paths } from "@/5.shared/constants";

type SlipViewProps = {
  id: number;
  onClose: () => void;
};

export const SlipView: FC<SlipViewProps> = (props) => {
  const { id, onClose } = props;
  const { data, mutate } = useGetSlip(id);
  const popover = useKeywordPopover<number>();
  const modifyPop = useKeywordPopover<number>();
  const { state: slip, ...handler } = useSlipHandler(data as BasicSlip);
  const { mutate: parentMutate } = useSWRConfig();

  const mainClose = () => {
    modifyPop.onClose();
    onClose();
  };

  const onModify = () => {
    modifyPop.onOpen(id);
  };

  const onDelete = () => {
    popover.onOpen(id);
  };

  const onSave = async () => {
    await update(slip);
    modifyPop.onClose();
    mutate();
    parentMutate(Paths.slip.getAll);
  };

  return (
    <Dialog
      open={!!id}
      onClose={mainClose}
      width={data?.slip === "TRANSFER" ? 70 : 50}
    >
      <Dialog.Header>
        <h3>전표 상세보기 - No. {id}</h3>
      </Dialog.Header>
      <Dialog.Body>
        <div id="slip-view-body" className="scroll-bar">
          {data?.slip === "TRANSFER" ? (
            modifyPop.open ? (
              <ModifyTransferSlip
                slip={slip as TransferSlip}
                onChangeEntry={handler.onChangeEntry}
                onDeleteEntry={handler.deleteEntry}
                onSubject={handler.onTransferSubject}
                addEntry={handler.addEntry}
                onChangeDate={handler.onChangeDate}
              />
            ) : (
              <TransferSlipPreview slip={data as TransferSlip} />
            )
          ) : modifyPop.open ? (
            <BasicModifySlip slip={slip as PaperSlip} {...handler} />
          ) : (
            <BasicSlipPreview slip={data as PaperSlip} />
          )}
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          <button onClick={modifyPop.open ? modifyPop.onClose : onClose}>
            닫기
          </button>
          <button
            className="btn-sky-white"
            onClick={modifyPop.open ? onSave : onModify}
          >
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
