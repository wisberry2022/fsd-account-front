import "./css/index.css";
import { Container } from "@/2.widgets/container";
import { Header } from "@/2.widgets/header";
import { ReceiptSlip, TransferSlip, WithdrawalSlip } from "@/2.widgets/slip";
import { SelectSlip } from "@/3.features/slip";
import { Slip } from "@/5.shared/types";
import { BasicTab } from "@/5.shared/ui";
import { ChangeEventHandler, FC, useState } from "react";
import { SlipProvider } from "../model/SlipProvider";

export const Statement: FC = () => {
  const [slip, setSlip] = useState<Slip>("RECEIPT");

  const onSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value } = e.target;
    setSlip(value as Slip);
  };

  return (
    <div id="slip-page">
      <Header />
      <Container>
        <BasicTab tabs={["전표 작성", "전표 목록"]}>
          <section id="slip-write">
            <div className="select-stt">
              <SelectSlip value={slip} onChange={onSelect} />
            </div>
            <div className="stt-panel">
              <SlipProvider>
                {slip === "RECEIPT" && <ReceiptSlip />}
                {slip === "WITHDRAWAL" && <WithdrawalSlip />}
                {slip === "TRANSFER" && <TransferSlip />}
              </SlipProvider>
            </div>
          </section>
          <section id="slip-list">전표 목록</section>
        </BasicTab>
      </Container>
    </div>
  );
};
