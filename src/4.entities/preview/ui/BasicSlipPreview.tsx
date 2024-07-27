import { ObjType, PaperSlip } from "@/5.shared/types";
import { getDateFormat } from "@/5.shared/utils";
import { FC } from "react";
import "./slip.css";

type BasicSlipPreviewProps = {
  slip: PaperSlip | undefined;
};

export const BasicSlipPreview: FC<BasicSlipPreviewProps> = (props) => {
  const { slip } = props;

  const slipMapper: ObjType<string> = {
    RECEIPT: "입금전표",
    WITHDRAWAL: "출금전표",
  };

  return (
    <table id="preview-slip">
      <thead>
        <tr>
          <th colSpan={4} className="slip-head-color">
            <div className="pre-title">
              <h2>{slip && slipMapper[slip?.slip]}</h2>
              <strong>
                {slip && getDateFormat(new Date(slip.date as Date))}
              </strong>
            </div>
          </th>
        </tr>
        <tr>
          <th className="slip-head-color">과목</th>
          <td>
            {slip?.slip === "RECEIPT"
              ? slip?.subject.credit
              : slip?.subject.debit}
          </td>
          <th className="slip-head-color">항목</th>
          <td>{slip?.item}</td>
        </tr>
        <tr>
          <th colSpan={3} className="slip-head-color">
            적요
          </th>
          <th colSpan={1} className="slip-head-color">
            금액
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={3} className="desc">
            {slip?.desc}
          </td>
          <td colSpan={1} className="amount">
            {slip?.amount}원
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={3} className="slip-head-color">
            합계
          </th>
          <td>{slip?.amount}원</td>
        </tr>
      </tfoot>
    </table>
  );
};
