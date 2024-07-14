import "./css/show-info.css";
import { FC } from "react";

type ShowInfoButtonProps = {
  onClick: () => void;
};

export const ShowInfoButton: FC<ShowInfoButtonProps> = (props) => {
  const { onClick } = props;

  return (
    <>
      <button id="show-info-btn" onClick={onClick}>
        관리
      </button>
    </>
  );
};
