import { useSlipContext } from "@/5.shared/hooks";
import { TransferSlipContext } from "@/5.shared/types";
import { TransferSlipPreview as Preview } from "@/4.entities/preview";
import { FC } from "react";

export const TransferSlipPreview: FC = () => {
  const { slip } = useSlipContext("TRANSFER") as TransferSlipContext;

  return (
    <div id="preview-body">
      <Preview slip={slip} />
    </div>
  );
};
