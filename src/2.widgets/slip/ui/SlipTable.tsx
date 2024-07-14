import { Slips } from "@/4.entities/slip";
import { FC } from "react";

export const SlipTable: FC = () => {
  return (
    <div id="slips">
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
          {Array.from({ length: 10 }).map((_, idx) => (
            <Slips key={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
