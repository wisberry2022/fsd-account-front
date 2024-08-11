import { SlipTable } from "@/2.widgets/slip";
import { useDataHandler, usePopover } from "@/5.shared/hooks";
import { FC } from "react";
import { FiSettings } from "react-icons/fi";
import "./css/inquiry-slip.css";
import {
  SearchFilter,
  SlipFilterRequest,
  SlipFilterRequestType,
} from "@/3.features/filter";
import { TitleAndBtnBar } from "@/5.shared/ui/bar";

const InquirySlip: FC = () => {
  const state = useDataHandler<SlipFilterRequestType>(SlipFilterRequest);
  const popover = usePopover();

  return (
    <section id="slip-list">
      <TitleAndBtnBar
        onClick={popover.onToggle}
        btnText="검색필터"
        icon={<FiSettings />}
      />
      <SlipTable request={state.state} />
      <SearchFilter
        open={popover.open}
        onClose={popover.onClose}
        request={state.state}
        onChange={state.onChangeInput}
        onSelect={state.onSelect}
      />
    </section>
  );
};

export default InquirySlip;
