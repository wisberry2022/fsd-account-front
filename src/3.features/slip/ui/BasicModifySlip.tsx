import "./css/basic-modify-slip.css";
import { SlipMapperEnum } from "@/5.shared/enums";
import { PaperSlip } from "@/5.shared/types";
import { FC } from "react";

type BasicModifySlipProps = {
  slip: PaperSlip;
};

const BasicModifySlip: FC<BasicModifySlipProps> = (props) => {
  const { slip } = props;

  return (
    <table id="modify-slip-view">
      <thead>
        <tr>
          <th colSpan={4} className="slip-head-color">
            <div className="pre-title">
              <h2>{slip && SlipMapperEnum[slip.slip]}</h2>
              <input type="date" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="slip-head-color">과목</th>
          <td>
            <input />
          </td>
          <th className="slip-head-color">항목</th>
          <td>
            <input value={slip?.item} />
          </td>
        </tr>
        <tr className="mid-title">
          <th colSpan={3} className="slip-head-color">
            적요
          </th>
          <th colSpan={1} className="slip-head-color">
            금액
          </th>
        </tr>
        <tr>
          <td colSpan={3} className="desc">
            <input value={slip?.desc} />
          </td>
          <td colSpan={1} className="amount">
            <input value={slip?.amount} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BasicModifySlip;
