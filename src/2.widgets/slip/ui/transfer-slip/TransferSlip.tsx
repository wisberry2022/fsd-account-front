import { FC } from "react";
import { AddSlipRow } from "@/3.features/slip";
import { TransferSlip as Slip } from "@/4.entities/slip";
import TransferSlipHeader from "./TransferSlipHeader";
import { useSlipContext } from "@/5.shared/hooks";
import { TransferSlipContext } from "@/5.shared/types";

export const TransferSlip: FC = () => {
  const { addEntry } = useSlipContext("TRANSFER") as TransferSlipContext;

  return (
    <div className="slip-area">
      <TransferSlipHeader />
      <Slip />
      <AddSlipRow addEntry={addEntry} />
    </div>
  );
};
