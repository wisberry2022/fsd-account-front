import "../css/slip-global.css";
import { FC } from "react";
import { ReceiptSlip as Slip } from "@/4.entities/slip";
import { ReceiptSlipHeader } from "./ReceiptSlipHeader";

export const ReceiptSlip: FC = () => {
  return (
    <div className="slip-area">
      <ReceiptSlipHeader />
      <Slip />
    </div>
  );
};
