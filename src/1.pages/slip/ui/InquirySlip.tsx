import { FilterBar, SlipTable } from "@/2.widgets/slip";
import { FC, useState } from "react";

const InquirySlip: FC = () => {
  return (
    <section id="slip-list">
      <FilterBar />
      <SlipTable />
    </section>
  );
};

export default InquirySlip;
