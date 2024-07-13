import { useSlipContext } from "@/5.shared/hooks";
import { BasicSlip } from "@/5.shared/ui";
import { FC } from "react";

export const WithdrawalSlip: FC = () => {
  const { onChange } = useSlipContext("WITHDRAWAL");

  return <BasicSlip type="WITHDRAWAL" onChange={onChange} />;
};
