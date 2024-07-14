import "./css/index.css";
import { Container } from "@/2.widgets/container";
import { Header } from "@/2.widgets/header";
import { BasicTab } from "@/5.shared/ui";
import { FC } from "react";
import WriteSlip from "./WriteSlip";
import InquirySlip from "./InquirySlip";

export const Slip: FC = () => {
  return (
    <div id="slip-page">
      <Header />
      <Container>
        <BasicTab tabs={["전표 작성", "전표 목록"]}>
          <WriteSlip />
          <InquirySlip />
        </BasicTab>
      </Container>
    </div>
  );
};
