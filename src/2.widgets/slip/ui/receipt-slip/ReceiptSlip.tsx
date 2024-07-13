import "../css/slip-global.css";
import { FC } from "react";
import { ReceiptSlipPreview, ReceiptSlip as Slip } from "@/4.entities/slip";
import { ReceiptSlipHeader } from "./ReceiptSlipHeader";
import { useSlipContext } from "@/5.shared/hooks";
import BasicSlipPreviewHeader from "../BasicSlipPreviewHeader";

export const ReceiptSlip: FC = () => {
  const { slip } = useSlipContext("RECEIPT");

  if (["OPENED", "MODIFYING"].includes(slip.status)) {
    return (
      <div className="slip-area">
        <ReceiptSlipHeader />
        <Slip />
      </div>
    );
  }

  if (slip.status === "STAGING") {
    return (
      <div className="slip-area">
        {/* <ReceiptSlipPreviewHeader /> */}
        <BasicSlipPreviewHeader type={slip.slip} />
        <ReceiptSlipPreview />
      </div>
    );
  }

  return <div>hi</div>;
};
