import { ObjType } from "@/5.shared/types";
import "./slip.css";
import { ChangeEventHandler, FC } from "react";

type BasicSlipProps = {
  type: "RECEIPT" | "WITHDRAWAL";
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const BasicSlip: FC<BasicSlipProps> = (props) => {
  const { type, onChange } = props;

  const typeMapper: ObjType<ObjType<string>> = {
    RECEIPT: {
      title: "입금전표",
      name: "credit",
    },
    WITHDRAWAL: {
      title: "출금전표",
      name: "debit",
    },
  };

  return (
    <div>
      <table id="slip">
        <thead>
          <tr>
            <th colSpan={4} className="slip-head-color">
              {typeMapper[type].title}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="subject slip-head-color">과목</th>
            <td className="subject-item">
              {/* 입금전표일 경우 대변(credit), 출금전표일 경우 차변(debit) */}
              <input
                type="text"
                name={typeMapper[type].name}
                onChange={onChange}
                className="slip-input"
              />
            </td>
            <th className="entry slip-head-color">항목</th>
            <td className="entry-item">
              <input
                type="text"
                name="item"
                onChange={onChange}
                className="slip-input"
              />
            </td>
          </tr>
          <tr className="sub-head">
            <th colSpan={3} className="slip-head-color">
              적요
            </th>
            <th className="slip-head-color">금액</th>
          </tr>
          <tr className="content">
            <td colSpan={3}>
              <input
                name="desc"
                type="text"
                className="slip-input"
                onChange={onChange}
              />
            </td>
            <td>
              <input
                name="amount"
                type="text"
                className="slip-input"
                onChange={onChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
