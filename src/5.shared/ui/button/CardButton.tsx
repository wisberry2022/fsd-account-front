import "./card-btn.css";
import { cloneElement, FC, ReactElement } from "react";

type CardButtonProps = {
  title: string;
  desc: string;
  onClick: () => void;
  icon?: ReactElement;
};

export const CardButton: FC<CardButtonProps> = (props) => {
  const { title, desc, onClick, icon } = props;

  return (
    <div className="card-btn" onClick={onClick}>
      {icon && (
        <figure>{cloneElement(icon, { className: "title-img" })}</figure>
      )}
      <div className="desc-box">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};
