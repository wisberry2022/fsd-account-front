import useSlipContext from "@/1.pages/slip/libs/SlipContext";
import { BasicSlip } from "@/5.shared/ui";
import { FC } from "react";

export const ReceiptSlip: FC = () => {
  const { onChange } = useSlipContext("receipt");
  return <BasicSlip onChange={onChange} type="RECEIPT" />;
};
