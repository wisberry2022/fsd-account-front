import { CloseSlip } from "@/3.features/slip";
import { useSlipContext } from "@/5.shared/hooks";
import { SlipHeader } from "@/5.shared/ui/header";
import { FC } from "react";

const TransferSlipHeader: FC = () => {
  const { onChangeDate, onChangeStatus } = useSlipContext("TRANSFER");

  return (
    <SlipHeader onChangeDate={onChangeDate}>
      <CloseSlip onChangeStatus={onChangeStatus} />
    </SlipHeader>
  );
};

export default TransferSlipHeader;
