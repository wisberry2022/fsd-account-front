import { useSlipContext } from "@/5.shared/hooks";
import { BasicSlipContext } from "@/5.shared/types";
import { BasicSlip } from "@/5.shared/ui";
import { FC } from "react";

export const ReceiptSlip: FC = () => {
  const { onChange } = useSlipContext("RECEIPT") as BasicSlipContext;
  return <BasicSlip onChange={onChange} type="RECEIPT" />;
};
