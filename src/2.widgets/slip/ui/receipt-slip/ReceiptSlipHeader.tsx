import { StaingSlip } from "@/3.features/slip";
import { useSlipContext } from "@/5.shared/hooks";
import { SlipHeader } from "@/5.shared/ui/header";
import { FC } from "react";

export const ReceiptSlipHeader: FC = () => {
  const { onChangeStatus, onChangeDate } = useSlipContext("RECEIPT");

  return (
    <SlipHeader onChangeDate={onChangeDate}>
      <StaingSlip onChangeStatus={onChangeStatus} />
    </SlipHeader>
  );
};
