import { BasicInfo } from "@/5.shared/types";
import "./css/show-info.css";
import { FC } from "react";
import { usePopover } from "@/5.shared/hooks";

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
    </>
  );
};
