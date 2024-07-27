import { SlipTable } from "@/2.widgets/slip";
import { usePopover } from "@/5.shared/hooks";
import { FC } from "react";
import { FiSettings } from "react-icons/fi";
import "./css/inquiry-slip.css";
import { SearchFilter } from "@/3.features/filter";

const InquirySlip: FC = () => {
  const popover = usePopover();

  return (
    <section id="slip-list">
      <div id="list-header" onClick={popover.onToggle}>
        <h2>전표 조회</h2>
        <div className="btn-sky-white">
          <FiSettings id="setting-icon" />
          <strong>검색필터</strong>
        </div>
      </div>
      <SlipTable />
      <SearchFilter open={popover.open} onClose={popover.onClose} />
    </section>
  );
};

export default InquirySlip;
