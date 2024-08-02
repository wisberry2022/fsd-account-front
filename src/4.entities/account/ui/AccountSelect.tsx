import { Dialog } from "@/5.shared/ui";
import { ChangeEventHandler, FC, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useGetAccountsSWR } from "../api/useGetAccountsSWR";
import { AccountHandlerListTable } from "./AccountHandlerListTable";
import "./act-select-pop.css";
import { AccountResponse } from "@/5.shared/types";
import { CategoryMapper } from "../libs/constants";

type AccountSelectPopupProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: (account: AccountResponse) => void;
  width?: number;
};

export const AccountSelectPopup: FC<AccountSelectPopupProps> = (props) => {
  const { open, onClose, onConfirm, width = 50 } = props;
  const { data } = useGetAccountsSWR();
  const [state, setState] = useState<AccountResponse>({} as AccountResponse);

  const onSelect = (value: AccountResponse) => {
    setState(value);
  };

  const onClick = () => {
    onConfirm(state);
    onClose();
  };

  const [keyword, setKeyword] = useState<string>("");

  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value);
  };

  const getViewData = (dataSet: AccountResponse[]): AccountResponse[] => {
    if (!keyword) {
      return dataSet;
    }
    return dataSet.filter((dat) => {
      const category = CategoryMapper[dat.category].includes(keyword);
      const name = dat.name.includes(keyword);
      const code = dat.code.includes(keyword);
      return (category || name || code) && dat;
    });
  };

  const viewData = getViewData(data ?? []);

  return (
    <Dialog open={open} onClose={onClose} width={width}>
      <Dialog.Header>
        <div className="left">
          <h3>계정과목 선택</h3>
        </div>
        <div className="right">
          <IoCloseSharp id="close-dlog" onClick={onClose} />
        </div>
      </Dialog.Header>
      <Dialog.Body>
        <div className="act-pop-body">
          <div className="act-srch-area">
            <input
              type="text"
              placeholder="분류, 계정과목명, 코드로 검색할 수 있습니다."
              onChange={onSearch}
            />
          </div>
          <div className="act-pop-list scroll-bar">
            <AccountHandlerListTable accounts={viewData} onSelect={onSelect} />
          </div>
        </div>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="btn-box">
          <button onClick={onClose}>취소</button>
          <button className="btn-sky-white" onClick={onClick}>
            선택
          </button>
        </div>
      </Dialog.Footer>
    </Dialog>
  );
};
