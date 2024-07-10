import "./css/receipt-slip.css";
import { FC } from "react";
import { ReceiptSlip as Slip } from "@/4.entities/slip";
import { ReceiptSlipHeader } from "./ReceiptSlipHeader";
import { AddSlipRow } from "@/3.features/slip";

export const ReceiptSlip: FC = () => {
  return (
    <div className="slip-area">
      <ReceiptSlipHeader />
      <Slip />
      <AddSlipRow />
    </div>
  );
};
