import { SlipTable } from "@/2.widgets/slip";
import { usePopover } from "@/5.shared/hooks";
import { FC } from "react";
import { FiSettings } from "react-icons/fi";
import "./css/inquiry-slip.css";
import { SearchFilter } from "@/3.features/filter";
import { TitleAndBtnBar } from "@/5.shared/ui/bar";

const InquirySlip: FC = () => {
  const popover = usePopover();

  return (
    <section id="slip-list">
      <TitleAndBtnBar
        onClick={popover.onToggle}
        btnText="검색필터"
        icon={<FiSettings />}
      />
      <SlipTable />
      <SearchFilter open={popover.open} onClose={popover.onClose} />
    </section>
  );
};

export default InquirySlip;
