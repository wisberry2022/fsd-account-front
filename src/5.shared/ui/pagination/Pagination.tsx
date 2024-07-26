import { FC } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./pagination.css";

type PaginationProps = {
  onClick: (page: number) => void;
  currentPage: number;
  limit: number;
  range: number;
  onLeft: () => void;
  onRight: () => void;
};

export const Pagination: FC<PaginationProps> = (props) => {
  const { onClick, currentPage, range, limit, onLeft, onRight } = props;

  return (
    <div id="page-box">
      {!range || <FaArrowLeft className="page-dir-arw" onClick={onLeft} />}
      <ul className="page-list">
        {Array.from({
          length: limit,
        }).map((_, i) => {
          return (
            <li
              key={i}
              className={`${currentPage === i + range && "current"}`}
              onClick={() => onClick(i + range)}
            >
              {range + i + 1}
            </li>
          );
        })}
      </ul>
      {limit === 10 && (
        <FaArrowRight className="page-dir-arw" onClick={onRight} />
      )}
    </div>
  );
};
