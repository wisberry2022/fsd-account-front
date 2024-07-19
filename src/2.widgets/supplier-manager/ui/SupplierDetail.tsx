import { Dialog } from "@/5.shared/ui";
import { FC } from "react";
import useGetSuppliy from "../api/useGetSuppliy";
import { Supplier } from "@/4.entities/supplier";
import { SupplierResponse } from "@/5.shared/types";

type SupplierDetailProps = {
  open: boolean;
  onClose: () => void;
  id: number;
};

const SupplierDetail: FC<SupplierDetailProps> = (props) => {
  const { open, onClose, id } = props;
  const { data, mutate } = useGetSuppliy(id);

  return (
    <Dialog open={open} onClose={onClose} width={80}>
      <Dialog.Header>
        <div className="left">
          <h3>거래처 상세보기 - {data?.name}</h3>
        </div>
        <div className="right"></div>
      </Dialog.Header>
      <Dialog.Body>
        <div className="sply-dtl-body">
          <Supplier sply={data ?? ({} as SupplierResponse)} />
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          <button onClick={onClose}>취소</button>
          <button className="btn-sky-white">거래처 수정하기</button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};

export default SupplierDetail;
