import { SlipFilterRequestType } from "@/3.features/filter";
import { SlipView } from "@/3.features/slip";
import { SlipRow } from "@/4.entities/slip";
import { useKeywordPopover } from "@/5.shared/hooks";
import { PagingProvider } from "@/5.shared/provider";
import { Page } from "@/5.shared/types";
import { BasicPagination } from "@/5.shared/ui";
import { FC, useState } from "react";
import { useGetSlips } from "../../api/useGetSlipSWR";
import "./css/slip-table.css";

type SlipTableProps = {
  request: SlipFilterRequestType;
};

export const SlipTable: FC<SlipTableProps> = (props) => {
  const { request } = props;
  const [page, setPage] = useState<number>(0);
  const [size] = useState<number>(10);
  const { data: pageable } = useGetSlips(page, size, request);

  const detail = useKeywordPopover<number>();

  const onRowClick = (seq: number) => {
    detail.onOpen(seq);
  };

  return (
    <div id="slips">
      <div className="tbl-box">
        <table id="slip-table">
          <thead>
            <tr>
              <th className="seq slip-bg-color">No</th>
              <th className="type slip-bg-color">종류</th>
              <th className="sup-desc slip-bg-color">내용</th>
              <th className="sup-date slip-bg-color">거래 일자</th>
              <th className="reg-date slip-bg-color">작성 일자</th>
            </tr>
          </thead>
          <tbody>
            {pageable?.content?.map((slip) => (
              <SlipRow key={slip.id} slip={slip} onClick={onRowClick} />
            ))}
          </tbody>
        </table>
      </div>
      <PagingProvider
        pageable={pageable as Page}
        page={page}
        setPage={setPage}
        size={size}
      >
        <BasicPagination />
      </PagingProvider>
      <SlipView id={detail.open as number} onClose={detail.onClose} />
    </div>
  );
};
