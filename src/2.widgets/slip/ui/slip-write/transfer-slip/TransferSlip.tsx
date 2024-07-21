import { FC } from "react";
import { AddSlipRow } from "@/3.features/slip";
import { TransferSlip as Slip } from "@/3.features/transfer-slip";
import TransferSlipHeader from "./TransferSlipHeader";
import { useSlipContext } from "@/5.shared/hooks";
import { TransferSlipContext } from "@/5.shared/types";
import SlipPreviewHeader from "../common-ui/SlipPreviewHeader";
import { TransferSlipPreview } from "@/3.features/preview";

export const TransferSlip: FC = () => {
  const { slip, addEntry } = useSlipContext("TRANSFER") as TransferSlipContext;

  if (["OPENED", "MODIFYING"].includes(slip.status)) {
    return (
      <div className="slip-area">
        <TransferSlipHeader />
        <Slip />
        <AddSlipRow addEntry={addEntry} />
      </div>
    );
  }

  if (slip.status === "STAGING") {
    return (
      <div className="slip-area">
        <SlipPreviewHeader type={slip.slip} />
        <TransferSlipPreview />
      </div>
    );
  }
};
