import { BasicSlip } from "@/4.entities/slip";
import { useSlipContext } from "@/5.shared/hooks";
import { BasicSlipContext } from "@/5.shared/types";
import { FC } from "react";

export const ReceiptSlip: FC = () => {
  const { slip, onChange } = useSlipContext("RECEIPT") as BasicSlipContext;
  return <BasicSlip slip={slip} onChange={onChange} />;
};
