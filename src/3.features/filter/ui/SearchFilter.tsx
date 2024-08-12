import { Slip } from "@/5.shared/types";
import { DepthList, Dialog } from "@/5.shared/ui";
import { getYYYYMMDDFormat } from "@/5.shared/utils";
import { ChangeEventHandler, FC } from "react";
import { FilterSlipTypeEnum } from "../constants/enum";
import { SlipFilterRequestType } from "../model/SlipFilterRequest";
import "./srch-filter.css";

type SearchFilterProps = {
  request: SlipFilterRequestType;
  onChange: (
    type: "string" | "number" | "date"
  ) => ChangeEventHandler<HTMLInputElement>;
  onSelect: ChangeEventHandler<HTMLSelectElement>;
  open: boolean;
  onClose: () => void;
};

export const SearchFilter: FC<SearchFilterProps> = (props) => {
  const { request, onChange, onSelect, open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} width={50}>
      <Dialog.Header>
        <h2>상세필터</h2>
      </Dialog.Header>
      <Dialog.Body>
        <div className="filter-body">
          <DepthList title="기간 조회">
            <DepthList.SubList title="등록일자 기준">
              <input
                type="date"
                name="startRegDttm"
                onChange={onChange("date")}
                value={getYYYYMMDDFormat(
                  new Date(request.startRegDttm ?? Date.now())
                )}
              />
              <input
                type="date"
                name="endRegDttm"
                onChange={onChange("date")}
                value={getYYYYMMDDFormat(
                  new Date(request.endRegDttm ?? Date.now())
                )}
              />
            </DepthList.SubList>
            <DepthList.SubList title="거래일자 기준">
              <input
                type="date"
                name="startTranDttm"
                onChange={onChange("date")}
                value={getYYYYMMDDFormat(
                  new Date(request.startTranDttm ?? Date.now())
                )}
              />
              <input
                type="date"
                name="endTranDttm"
                onChange={onChange("date")}
                value={getYYYYMMDDFormat(
                  new Date(request.endTranDttm ?? Date.now())
                )}
              />
            </DepthList.SubList>
          </DepthList>
          <DepthList title="전표 종류">
            <DepthList.SubList title="종류">
              <select
                name="slip"
                onChange={onSelect}
                value={request.slip as Slip}
              >
                <option value={FilterSlipTypeEnum.TOTAL}>전체</option>
                <option value={FilterSlipTypeEnum.RECEIPT}>입금전표</option>
                <option value={FilterSlipTypeEnum.WITHDRAWAL}>출금전표</option>
                <option value={FilterSlipTypeEnum.TRANSFER}>대체전표</option>
              </select>
            </DepthList.SubList>
          </DepthList>
          <DepthList title="키워드 조회">
            <DepthList.SubList title="검색어 입력">
              <input
                type="text"
                placeholder="적요를 입력하세요"
                name="keyword"
                onChange={onChange("string")}
                value={request.keyword as string}
              />
            </DepthList.SubList>
          </DepthList>
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box right-flex">
          <button
            className="btn-sky-white"
            onClick={() => console.log("save ", request)}
          >
            적용
          </button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};
