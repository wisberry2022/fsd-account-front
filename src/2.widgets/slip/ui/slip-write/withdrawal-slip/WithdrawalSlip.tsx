import "../css/slip-global.css";
import { FC } from "react";
import WithdrawalSlipHeader from "./WithdrawalSlipHeader";
import { useSlipContext } from "@/5.shared/hooks";
import { BasicSlipContext } from "@/5.shared/types";
import { WithdrawalSlip as Slip } from "@/3.features/withdrawal-slip";
import SlipPreviewHeader from "../common-ui/SlipPreviewHeader";
import { WithdrawalSlipPreview } from "@/3.features/preview";

export const WithdrawalSlip: FC = () => {
  const { slip } = useSlipContext("WITHDRAWAL") as BasicSlipContext;

  if (["OPENED", "MODIFYING"].includes(slip.status)) {
    return (
      <div className="slip-area">
        <WithdrawalSlipHeader />
        <Slip />
      </div>
    );
  }

  if (slip.status === "STAGING") {
    return (
      <div className="slip-area">
        <SlipPreviewHeader type={slip.slip} />
        <WithdrawalSlipPreview />
      </div>
    );
  }

  return <div>hi</div>;
};
