import { useSlipContext } from "@/5.shared/hooks";
import { BasicSlipContext } from "@/5.shared/types";
import { BasicSlip } from "@/5.shared/ui";
import { FC } from "react";

export const WithdrawalSlip: FC = () => {
  const { onChange } = useSlipContext("WITHDRAWAL") as BasicSlipContext;

  return <BasicSlip type="WITHDRAWAL" onChange={onChange} />;
};
