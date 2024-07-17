import { FC } from "react";

type ResetProps = {
  onClick: () => void;
};

export const Reset: FC<ResetProps> = (props) => {
  const { onClick } = props;

  return (
    <button className="basic-btn btn-red-white" onClick={onClick}>
      초기화
    </button>
  );
};
