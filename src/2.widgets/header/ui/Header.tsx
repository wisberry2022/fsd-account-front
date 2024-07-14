import { FC } from "react";
import "./css/index.css";
import { Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <div className="header">
      <ul className="gnb">
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/slip">전표</Link>
        </li>
        <li>
          <Link to="/journal">분개장</Link>
        </li>
        <li>
          <Link to="/test3">메뉴3</Link>
        </li>
        <li>
          <Link to="/test4">메뉴4</Link>
        </li>
      </ul>
    </div>
  );
};
