import { BasicSlipPreview } from "@/4.entities/preview";
import { useSlipContext } from "@/5.shared/hooks";
import { BasicSlipContext } from "@/5.shared/types";
import { FC } from "react";

export const ReceiptSlipPreview: FC = () => {
  const { slip } = useSlipContext("RECEIPT") as BasicSlipContext;
  return (
    <div id="preview-body">
      <BasicSlipPreview slip={slip} />
    </div>
  );
};
