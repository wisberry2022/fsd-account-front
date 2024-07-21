import "./popup-trg-box.css";
import { FC } from "react";
import { FaSearch } from "react-icons/fa";

type PopupTriggerBoxProps = {
  value: string | null
  onClick: () => void;
};

export const PopupTriggerBox: FC<PopupTriggerBoxProps> = (props) => {
  const { value, onClick } = props;

  return (
    <div id="popup-trg-box" onClick={onClick}>
      <strong>{value}</strong>
      <FaSearch />
    </div>
  );
};
