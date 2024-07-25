import { ObjType } from "@/5.shared/types";

const SlipTypeMapper: ObjType<string> = {
  RECEIPT: "입금",
  WITHDRAWAL: "출금",
  TRANSFER: "대체",
};

export default SlipTypeMapper;
