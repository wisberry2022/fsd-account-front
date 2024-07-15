import "./sply-del.css";
import { FC } from "react";

type SupplierDeleteProps = {
  onClick: () => void;
};

export const SupplierDelete: FC<SupplierDeleteProps> = (props) => {
  const { onClick } = props;
  return (
    <button id="sply-del-btn" onClick={onClick}>
      거래처 삭제
    </button>
  );
};
