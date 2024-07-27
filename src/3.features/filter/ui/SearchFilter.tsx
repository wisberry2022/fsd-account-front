import "./srch-filter.css";
import { Dialog } from "@/5.shared/ui";
import { DepthList } from "@/5.shared/ui";
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
          <DepthList title="기간 조회">
            <DepthList.SubList title="등록일자 기준">
              <input type="date" />
              <input type="date" />
            </DepthList.SubList>
            <DepthList.SubList title="거래일자 기준">
              <input type="date" />
              <input type="date" />
            </DepthList.SubList>
          </DepthList>
          <DepthList title="전표 종류">
            <DepthList.SubList title="종류">
              <select>
                <option>입금전표</option>
                <option>출금전표</option>
                <option>대체전표</option>
              </select>
            </DepthList.SubList>
          </DepthList>
          <DepthList title="키워드 조회">
            <DepthList.SubList title="검색어 입력">
              <input type="text" placeholder="적요를 입력하세요" />
            </DepthList.SubList>
          </DepthList>
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
