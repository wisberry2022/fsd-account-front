import "../css/slip-global.css";
import { FC } from "react";
import { ReceiptSlip as Slip } from "@/4.entities/slip";
import { SlipHeader } from "../SlipHeader";
import { AddSlipRow } from "@/3.features/slip";

export const ReceiptSlip: FC = () => {
  return (
    <div className="slip-area">
      <SlipHeader />
      <Slip />
      <AddSlipRow />
    </div>
  );
};
