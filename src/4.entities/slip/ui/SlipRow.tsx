import { SlipList } from "@/5.shared/types";
import { convert2DateFormat } from "@/5.shared/utils";
import { FC } from "react";
import SlipTypeMapper from "../libs/constants";
import "./css/slips.css";

type SlipRowProps = {
  slip: SlipList;
};

export const SlipRow: FC<SlipRowProps> = (props) => {
  const { slip } = props;

  return (
    <tr className="slip-content">
      <td className="seq">{slip.id}</td>
      <td className="type">{SlipTypeMapper[slip.type]}</td>
      <td className="desc">{slip.desc ?? "적요 공란"}</td>
      <td className="sup-date">
        {convert2DateFormat(slip.transDttm) ?? "거래일자 공란"}
      </td>
      <td className="reg-date">{convert2DateFormat(slip.regDttm)}</td>
    </tr>
  );
};
