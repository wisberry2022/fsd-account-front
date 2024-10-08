import "../css/slip-global.css";
import { FC } from "react";
import { ReceiptSlipHeader } from "./ReceiptSlipHeader";
import { useSlipContext } from "@/5.shared/hooks";
import { ReceiptSlip as Slip } from "@/3.features/receipt-slip";
import SlipPreviewHeader from "../common-ui/SlipPreviewHeader";
import { ReceiptSlipPreview } from "@/3.features/preview";

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
        <SlipPreviewHeader type={slip.slip} />
        <ReceiptSlipPreview />
      </div>
    );
  }

  return <div>hi</div>;
};
