import "./srch-filter.css";
import { Dialog } from "@/5.shared/ui";
import { FC } from "react";

type SearchFilterProps = {
  open: boolean;
  onClose: () => void;
};

export const SearchFilter: FC<SearchFilterProps> = (props) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} width={50}>
      <Dialog.Header>
        <h2>상세필터</h2>
      </Dialog.Header>
      <Dialog.Body>
        <div className="filter-body">
          <dl className="def-list">
            <dt>기간 조회</dt>
            <dd>
              <dl>
                <dt>등록일자 기준</dt>
                <dd>
                  <input type="date" className="srch-content" />
                  <input type="date" className="srch-content" />
                </dd>
              </dl>
              <dl>
                <dt>거래일자 기준</dt>
                <dd>
                  <input type="date" className="srch-content" />
                  <input type="date" className="srch-content" />
                </dd>
              </dl>
            </dd>
          </dl>
          <dl className="def-list">
            <dt>전표 종류</dt>
            <dd>
              <dl>
                <dt>종류</dt>
                <dd>
                  <select className="srch-content">
                    <option>입금전표</option>
                    <option>출금전표</option>
                    <option>대체전표</option>
                  </select>
                </dd>
              </dl>
            </dd>
          </dl>
          <dl className="def-list">
            <dt>키워드 조회</dt>
            <dd>
              <dl>
                <dt>검색어 입력</dt>
                <dd>
                  <input
                    type="text"
                    placeholder="적요를 입력하세요"
                    className="srch-content full-width"
                  />
                </dd>
              </dl>
            </dd>
          </dl>
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box right-flex">
          <button className="btn-sky-white">적용</button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};
