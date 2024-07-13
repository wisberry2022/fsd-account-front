import { StaingSlip } from "@/3.features/slip";
import { useSlipContext } from "@/5.shared/hooks";
import { SlipHeader } from "@/5.shared/ui/header";
import { FC } from "react";

const WithdrawalSlipHeader: FC = () => {
  const { slip, onChangeDate, onChangeStatus } = useSlipContext("WITHDRAWAL");

  return (
    <SlipHeader date={slip.date} onChangeDate={onChangeDate}>
      <StaingSlip onChangeStatus={onChangeStatus} />
    </SlipHeader>
  );
};

export default WithdrawalSlipHeader;
