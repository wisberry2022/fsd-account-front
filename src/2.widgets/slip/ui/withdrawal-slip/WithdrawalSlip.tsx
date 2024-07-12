import "../css/slip-global.css";
import { FC } from "react";
import { WithdrawalSlip as Slip } from "@/4.entities/slip";
import { AddSlipRow } from "@/3.features/slip";
import WithdrawalSlipHeader from "./WithdrawalSlipHeader";

export const WithdrawalSlip: FC = () => {
  return (
    <div className="slip-area">
      <WithdrawalSlipHeader />
      <Slip />
      <AddSlipRow />
    </div>
  );
};
