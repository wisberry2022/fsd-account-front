import { Suppliers } from "@/4.entities/supplier";
import "./supplier-manager.css";
import { Dialog } from "@/5.shared/ui";
import { FC } from "react";
import { IoCloseSharp } from "react-icons/io5";

type SupplierManagerProps = {
  open: boolean;
  onClose: () => void;
};

const SupplierManager: FC<SupplierManagerProps> = (props) => {
  const { open, onClose } = props;

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
      <Dialog.Body>
        <div className="sply-area">
          <div className="sply-header">
            <button className="reg">신규 거래처 등록하기</button>
            <button className="delete">거래처 삭제</button>
          </div>
          <div className="sply-list scroll-bar">
            <Suppliers />
          </div>
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          <button onClick={onClose}>확인</button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};

export default SupplierManager;
