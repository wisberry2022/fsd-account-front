import { CloseSlip, ModifingSlip } from "@/3.features/slip";
import { useSlipContext } from "@/5.shared/hooks";
import { BasicSlipContext, Slip } from "@/5.shared/types";
import { FC } from "react";

type BasicSlipPreviewHeaderProps = {
  type: Omit<Slip, "TRANSFER">;
};

const BasicSlipPreviewHeader: FC<BasicSlipPreviewHeaderProps> = (props) => {
  const { type } = props;
  const { onChangeStatus } = useSlipContext(type as Slip) as BasicSlipContext;

  return (
    <div id="preview-header">
      <div className="slip-controller-box">
        <ModifingSlip onChangeStatus={onChangeStatus} />
        <CloseSlip onChangeStatus={onChangeStatus} />
      </div>
    </div>
  );
};

export default BasicSlipPreviewHeader;
