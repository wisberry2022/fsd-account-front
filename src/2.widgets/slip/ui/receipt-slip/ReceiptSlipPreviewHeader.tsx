import "../css/slip-global.css";
import { CloseSlip, ModifingSlip } from "@/3.features/slip";
import { useSlipContext } from "@/5.shared/hooks";
import { FC } from "react";

const ReceiptSlipPreviewHeader: FC = () => {
  const { onChangeStatus } = useSlipContext("RECEIPT");
  return (
    <div id="preview-header">
      <div className="slip-controller-box">
        <ModifingSlip onChangeStatus={onChangeStatus} />
        <CloseSlip onChangeStatus={onChangeStatus} />
      </div>
    </div>
  );
};

export default ReceiptSlipPreviewHeader;
