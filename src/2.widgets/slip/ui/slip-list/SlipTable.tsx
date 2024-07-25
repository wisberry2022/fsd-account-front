import "./css/slip-table.css";
import { SlipRow } from "@/4.entities/slip";
import { FC, useState } from "react";
import { useGetSlips } from "../../api/useGetSlipSWR";
import { Pagination } from "@/5.shared/ui";

export const SlipTable: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(10);
  const { data: pageable } = useGetSlips(page, size);

  const onClick = (page: number) => {
    setPage(page);
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
              <SlipRow key={slip.id} slip={slip} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination currentPage={page} onClick={onClick} />
    </div>
  );
};
