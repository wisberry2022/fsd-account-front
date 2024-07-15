import { FC } from "react";

type AccountRegisterProps = {
  onClick: () => void;
};

export const AccountRegister: FC<AccountRegisterProps> = (props) => {
  const { onClick } = props;

  return (
    <button className="dlog-head-btn btn-sky-white" onClick={onClick}>
      계정과목 등록하기
    </button>
  );
};
