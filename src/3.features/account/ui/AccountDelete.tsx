import { FC } from "react";

type AccountDeleteProps = {
  onClick: () => void;
};

export const AccountDelete: FC<AccountDeleteProps> = (props) => {
  const { onClick } = props;
  return (
    <button className="dlog-head-btn btn-red-white" onClick={onClick}>
      계정과목 삭제
    </button>
  );
};
