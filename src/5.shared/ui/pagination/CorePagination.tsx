import { FC } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./pagination.css";

type CorePaginaitionProps = {
  onClick: (page: number) => void;
  page: number;
  limit: number;
  range: number;
  onLeft: () => void;
  onRight: () => void;
};

export const CorePaginaition: FC<CorePaginaitionProps> = (props) => {
  const { onClick, page, range, limit, onLeft, onRight } = props;

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
              className={`${page === i + range && "current"}`}
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
