import "./sply-reg.css";
import { FC } from "react";

type SupplierRegisterProps = {
  onClick: () => void;
};

export const SupplierRegister: FC<SupplierRegisterProps> = (props) => {
  const { onClick } = props;

  return (
    <button id="sply-reg-btn" onClick={onClick}>
      신규 거래처 등록
    </button>
  );
};
