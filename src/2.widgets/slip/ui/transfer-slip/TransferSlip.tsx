import { FC } from "react";
import { AddSlipRow } from "@/3.features/slip";
import { TransferSlip as Slip } from "@/4.entities/slip";

export const TransferSlip: FC = () => {
  return (
    <div className="slip-area">
      {/* <SlipHeader /> */}
      <Slip />
      <AddSlipRow />
    </div>
  );
};
