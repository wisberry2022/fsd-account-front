import { Dialog } from "@/5.shared/ui";
import { FC, useState } from "react";
import { Supplier, SupplierRegister } from "@/4.entities/supplier";
import { SupplierResponse } from "@/5.shared/types";
import { useDataHandler } from "@/5.shared/hooks";
import { useGetSupplier } from "../api/useGetSuppliers";
import { modify } from "../api/fetcher";
import { useSWRConfig } from "swr";
import { Paths } from "@/5.shared/constants";

type SupplierDetailProps = {
  open: boolean;
  onClose: () => void;
  id: number;
};

const SupplierDetail: FC<SupplierDetailProps> = (props) => {
  const { open, onClose, id } = props;
  const { data, mutate } = useGetSupplier(id);
  const { mutate: listMutate } = useSWRConfig();
  const [state, setState] = useState<string>("detail");
  const handler = useDataHandler<SupplierResponse>(data as SupplierResponse);

  const onModifyState = () => {
    setState("modify");
  };

  const onModify = async () => {
    await modify(handler.state);
    listMutate(Paths.basicInfo.supplier.getAll);
    mutate();
    setState("detail");
  };

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
          {state === "detail" && (
            <Supplier sply={data ?? ({} as SupplierResponse)} />
          )}
          {state === "modify" && (
            <SupplierRegister
              sply={handler.state ?? ({} as SupplierResponse)}
              onChangeInput={handler.onChangeInput}
              onRadio={handler.onRadio}
            />
          )}
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          {state === "detail" && (
            <>
              <button onClick={onClose}>취소</button>
              <button className="btn-sky-white" onClick={onModifyState}>
                거래처 수정하기
              </button>
            </>
          )}
          {state === "modify" && (
            <>
              <button onClick={() => setState("detail")}>취소</button>
              <button className="btn-sky-white" onClick={onModify}>
                수정하기
              </button>
            </>
          )}
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};

export default SupplierDetail;
