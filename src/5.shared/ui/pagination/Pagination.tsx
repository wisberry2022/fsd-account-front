import "./pagination.css";
import { FC } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type PaginationProps = {
  onClick: (page: number) => void;
  currentPage: number;
  range?: number;
};

export const Pagination: FC<PaginationProps> = (props) => {
  const { onClick, currentPage, range = 10 } = props;

  return (
    <div id="page-box">
      <FaArrowLeft className="page-dir-arw" />
      <ul className="page-list">
        {Array.from({ length: range }).map((_, i) => {
          return (
            <li
              key={i}
              className={`${currentPage === i && "current"}`}
              onClick={() => onClick(i)}
            >
              {i + 1}
            </li>
          );
        })}
      </ul>
      <FaArrowRight className="page-dir-arw" />
    </div>
  );
};
