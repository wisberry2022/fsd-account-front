import "./card.css";
import { FC, ReactNode } from "react";

type CardProps = {
  title: string;
  desc: string;
  children: ReactNode;
  fullWidth?: boolean;
};

export const Card: FC<CardProps> = (props) => {
  const { title, desc, children, fullWidth = false } = props;
  return (
    <div className={`basic-card ${fullWidth && "fullWidth"}`}>
      <div className="title-area">
        <h3>{title}</h3>
      </div>
      <div className="card-content">
        <p>{desc}</p>
        <div className="btn-box">{children}</div>
      </div>
    </div>
  );
};
