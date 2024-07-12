import { useSlipContext } from "@/5.shared/hooks";
import { BasicSlip } from "@/5.shared/ui";
import { FC } from "react";

export const ReceiptSlip: FC = () => {
  const { onChange } = useSlipContext("RECEIPT");
  return <BasicSlip onChange={onChange} type="RECEIPT" />;
};
