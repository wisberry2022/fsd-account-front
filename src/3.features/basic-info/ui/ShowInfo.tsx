import { BasicInfo } from "@/5.shared/types";
import "./css/show-info.css";
import { FC } from "react";
import { usePopover } from "@/5.shared/hooks";
import SupplierManager from "./supplier/SupplierManager";

type ShowInfoButtonProps = {
  type: BasicInfo;
};

export const ShowInfoButton: FC<ShowInfoButtonProps> = (props) => {
  const { type } = props;
  const popover = usePopover();

  return (
    <>
      <button id="show-info-btn" onClick={popover.onToggle}>
        관리
      </button>
      {type === "SUPPLIER" && (
        <SupplierManager open={popover.open} onClose={popover.onClose} />
      )}
    </>
  );
};
