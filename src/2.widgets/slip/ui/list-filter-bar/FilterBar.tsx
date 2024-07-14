import "../css/slip-list-global.css";
import { IoMdSearch } from "react-icons/io";
import { FC } from "react";

export const FilterBar: FC = () => {
  return (
    <div className="filter-bar">
      <dl id="period-filter" className="filter-sec">
        <dt className="filter-label">기간 선택</dt>
        <dd className="filter-content">
          <div id="period-box">
            <input type="date" className="date-input" />
            <input type="date" className="date-input" />
          </div>
        </dd>
      </dl>
      <dl id="keyword-filter" className="filter-sec">
        <dt className="filter-label">키워드 검색</dt>
        <dd className="filter-content">
          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="검색어를 입력할 수 있습니다."
            />
            <IoMdSearch id="search" className="adornment" />
          </div>
        </dd>
      </dl>
    </div>
  );
};
