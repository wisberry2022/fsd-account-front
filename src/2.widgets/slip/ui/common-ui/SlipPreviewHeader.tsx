import "../css/slip-preview.css";
import { CloseSlip, ModifingSlip } from "@/3.features/slip";
import { useSlipContext } from "@/5.shared/hooks";
import { Slip } from "@/5.shared/types";
import { FC } from "react";

type SlipPreviewHeaderProps = {
  type: Slip;
};

const SlipPreviewHeader: FC<SlipPreviewHeaderProps> = (props) => {
  const { type } = props;
  const { init, onChangeStatus } = useSlipContext(type as Slip);

  return (
    <div id="preview-header">
      <h3>전표 미리보기</h3>
      <div className="slip-controller-box">
        <ModifingSlip onChangeStatus={onChangeStatus} />
        <CloseSlip init={init} onChangeStatus={onChangeStatus} />
      </div>
    </div>
  );
};

export default SlipPreviewHeader;
