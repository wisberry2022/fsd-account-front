import {
  SupplierDelete,
  SupplierDeleteDialog,
  SupplierRegister as SupplierRegisterBtn,
} from "@/3.features/supplier";
import { SupplierRegister, Suppliers } from "@/4.entities/supplier";
import { usePopover } from "@/5.shared/hooks";
import { ObjType } from "@/5.shared/types";
import { Dialog } from "@/5.shared/ui";
import { FC, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { add } from "../api/AddSupply";
import { useGetSuppliers } from "../api/useGetSupplier";
import { useAddSupplier } from "../model/useAddSupplier";
import "./supplier-manager.css";

type SupplierManagerProps = {
  open: boolean;
  onClose: () => void;
};

export const SupplierManager: FC<SupplierManagerProps> = (props) => {
  const { open, onClose } = props;
  const [state, setState] = useState("MAIN");
  const swr = useGetSuppliers();
  const { state: sply, onChangeInput, onRadio } = useAddSupplier();
  const popover = usePopover();

  const onSplyReg = () => {
    setState("REGISTER");
  };

  const onMain = () => {
    setState("MAIN");
  };

  const onSplyDelete = () => {
    popover.onToggle();
  };

  const onSave = async () => {
    await add(sply);
    swr.mutate();
    setState("MAIN");
  };

  const stateMapper: ObjType<() => JSX.Element> = {
    MAIN: () => (
      <>
        <Dialog.Body>
          <div className="sply-area">
            <div className="sply-header">
              <SupplierRegisterBtn onClick={onSplyReg} />
              <SupplierDelete onClick={onSplyDelete} />
            </div>
            <div className="sply-list scroll-bar">
              <Suppliers splys={swr.data} />
            </div>
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <div className="btn-box">
            <button className="btn-sky-white" onClick={onClose}>
              확인
            </button>
          </div>
        </Dialog.Footer>
        <SupplierDeleteDialog open={popover.open} onClose={popover.onClose} />
      </>
    ),
    REGISTER: () => (
      <>
        <Dialog.Body>
          <div className="sply-reg-area">
            <div className="sply-header">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div className="reg-body scroll-bar">
              <SupplierRegister
                sply={sply}
                onChangeInput={onChangeInput}
                onRadio={onRadio}
              />
            </div>
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <div className="btn-box">
            <button className="btn-sky-white" onClick={onMain}>
              뒤로가기
            </button>
            <button onClick={onSave}>등록하기</button>
          </div>
        </Dialog.Footer>
      </>
    ),
  };

  return (
    <Dialog open={open} onClose={onClose} width={50}>
      <Dialog.Header>
        <div className="left">
          <h4>거래처 관리</h4>
        </div>
        <div className="right">
          <IoCloseSharp id="close-dlog" onClick={onClose} />
        </div>
      </Dialog.Header>
      {stateMapper[state]()}
    </Dialog>
  );
};
