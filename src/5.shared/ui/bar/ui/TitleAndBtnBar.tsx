import "./tit-btn-bar.css";
import { cloneElement, FC, ReactElement } from "react";

type TitleAndBtnBarProps = {
  onClick: () => void;
  btnText: string;
  icon?: ReactElement;
};

export const TitleAndBtnBar: FC<TitleAndBtnBarProps> = (props) => {
  const { onClick, btnText, icon } = props;

  return (
    <div id="tit-btn-bar">
      <h2>전표 조회</h2>
      <div className="btn-sky-white" onClick={onClick}>
        {icon &&
          cloneElement(icon, {
            id: "setting-icon",
          })}
        <strong>{btnText}</strong>
      </div>
    </div>
  );
};
