import { FC } from "react";
import "./css/index.css";

export const Header: FC = () => {
  return (
    <div className="header">
      <ul className="gnb">
        <li>분개장</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
        <li>메뉴4</li>
      </ul>
    </div>
  );
};
