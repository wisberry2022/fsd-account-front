import { Slip } from "@/5.shared/types";
import { FilterSlipTypeEnum } from "../constants/enum";

export type SlipFilterRequestType = {
  startRegDttm: Date | null;
  endRegDttm: Date | null;
  startTranDttm: Date | null;
  endTranDttm: Date | null;
  slip: FilterSlipTypeEnum;
  keyword: string | null;
};

export const SlipFilterRequest = {
  startRegDttm: null,
  endRegDttm: null,
  startTranDttm: null,
  endTranDttm: null,
  slip: FilterSlipTypeEnum.TOTAL,
  keyword: "",
};
