import { useSlipContext } from "@/5.shared/hooks";
import { BasicSlipContext } from "@/5.shared/types";
import { BasicSlipPreview } from "@/5.shared/ui";
import { FC } from "react";

export const WithdrawalSlipPreview: FC = () => {
  const { slip } = useSlipContext("WITHDRAWAL") as BasicSlipContext;

  return (
    <div id="preview-body">
      <BasicSlipPreview slip={slip} />
    </div>
  );
};
