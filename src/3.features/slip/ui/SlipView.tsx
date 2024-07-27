import "./css/slip-view.css";
import { BasicSlipPreview } from "@/4.entities/preview";
import { PaperSlip } from "@/5.shared/types";
import { Dialog } from "@/5.shared/ui";
import { FC } from "react";

type SlipViewProps = {
  id: number;
  onClose: () => void;
};

export const SlipView: FC<SlipViewProps> = (props) => {
  const { id, onClose } = props;

  return (
    <Dialog open={!!id} onClose={onClose} width={50}>
      <Dialog.Header>
        <h3>전표 상세보기 - No. {id}</h3>
      </Dialog.Header>
      <Dialog.Body>
        <div id="slip-view-body">
          <BasicSlipPreview
            slip={
              {
                date: null,
                status: "CLOSED",
                slip: "RECEIPT",
                subject: {
                  creditId: 1,
                  credit: "과목1",
                  debitId: 2,
                  debit: "과목2",
                },
                desc: "asd",
                amount: 0,
                item: "",
              } as PaperSlip
            }
          />
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
