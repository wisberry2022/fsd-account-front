import { SupplierRegister, Suppliers } from "@/4.entities/supplier";
import "./supplier-manager.css";
import { Dialog } from "@/5.shared/ui";
import { FC, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ObjType } from "@/5.shared/types";

type SupplierManagerProps = {
  open: boolean;
  onClose: () => void;
};

const SupplierManager: FC<SupplierManagerProps> = (props) => {
  const { open, onClose } = props;
  const [state, setState] = useState("MAIN");

  const onSplyReg = () => {
    setState("REGISTER");
  };

  const onMain = () => {
    setState("MAIN");
  };

  const stateMapper: ObjType<() => JSX.Element> = {
    MAIN: () => (
      <div className="sply-area">
        <div className="sply-header">
          <button className="reg" onClick={onSplyReg}>
            신규 거래처 등록하기
          </button>
          <button className="delete">거래처 삭제</button>
        </div>
        <div className="sply-list scroll-bar">
          <Suppliers />
        </div>
      </div>
    ),
    REGISTER: () => (
      <div className="sply-reg-area">
        <div className="sply-header">
          <div className="left">
            <button className="go-back" onClick={onMain}>
              메인으로
            </button>
          </div>
          <div className="right"></div>
        </div>
        <div className="reg-body scroll-bar">
          <SupplierRegister />
        </div>
        <div className="sply-footer">
          <div className="left"></div>
          <div className="right">
            <button className="reg">등록하기</button>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <Dialog open={open} onClose={onClose} width={50}>
      <Dialog.Header>
        <div className="left">
          <h4>거래처 정보 관리</h4>
        </div>
        <div className="right">
          <IoCloseSharp id="close-dlog" onClick={onClose} />
        </div>
      </Dialog.Header>
      <Dialog.Body>{stateMapper[state]()}</Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          <button onClick={onClose}>확인</button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};

export default SupplierManager;
