import { Slip } from "@/5.shared/types";

export type SlipFilterRequestType = {
  startRegDttm: Date | null;
  endRegDttm: Date | null;
  startTranDttm: Date | null;
  endTranDttm: Date | null;
  slip: Slip;
  keyword: string | null;
};

export const SlipFilterRequest = {
  startRegDttm: null,
  endRegDttm: null,
  startTranDttm: null,
  endTranDttm: null,
  slip: null,
  keyword: "",
};
