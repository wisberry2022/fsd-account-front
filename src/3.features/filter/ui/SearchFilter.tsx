import { Slip } from "@/5.shared/types";
import { DepthList, Dialog } from "@/5.shared/ui";
import { getYYYYMMDDFormat } from "@/5.shared/utils";
import { ChangeEventHandler, FC } from "react";
import { FilterSlipTypeEnum } from "../constants/enum";
import {
  SlipFilterRequest,
  SlipFilterRequestType,
} from "../model/SlipFilterRequest";
import "./srch-filter.css";
import { useDataHandler } from "@/5.shared/hooks";

type SearchFilterProps = {
  request: SlipFilterRequestType;
  setState: (request: SlipFilterRequestType) => void;
  open: boolean;
  onClose: () => void;
};

export const SearchFilter: FC<SearchFilterProps> = (props) => {
  const { request, setState, open, onClose } = props;
  const state = useDataHandler<SlipFilterRequestType>(request);

  const onFilter = () => {
    setState(state.state);
    onClose();
  };

  const initFilter = () => {
    state.setState(SlipFilterRequest);
  };

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
                onChange={state.onChangeInput("date")}
                value={getYYYYMMDDFormat(state.state.startRegDttm)}
              />
              <input
                type="date"
                name="endRegDttm"
                onChange={state.onChangeInput("date")}
                value={getYYYYMMDDFormat(state.state.endRegDttm)}
              />
            </DepthList.SubList>
            <DepthList.SubList title="거래일자 기준">
              <input
                type="date"
                name="startTranDttm"
                onChange={state.onChangeInput("date")}
                value={getYYYYMMDDFormat(state.state.startTranDttm)}
              />
              <input
                type="date"
                name="endTranDttm"
                onChange={state.onChangeInput("date")}
                value={getYYYYMMDDFormat(state.state.endTranDttm)}
              />
            </DepthList.SubList>
          </DepthList>
          <DepthList title="전표 종류">
            <DepthList.SubList title="종류">
              <select
                name="slip"
                onChange={state.onSelect}
                value={state.state.slip as Slip}
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
                onChange={state.onChangeInput("string")}
                value={state.state.keyword as string}
              />
            </DepthList.SubList>
          </DepthList>
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box right-flex">
          <button onClick={initFilter}>초기화</button>
          <button className="btn-sky-white" onClick={onFilter}>
            적용
          </button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};
