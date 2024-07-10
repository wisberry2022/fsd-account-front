import "./css/index.css";
import { Container } from "@/2.widgets/container";
import { Header } from "@/2.widgets/header";
import { ReceiptSlip, WithdrawalSlip } from "@/2.widgets/slip";
import { SelectSlip } from "@/3.features/slip";
import { Slip } from "@/5.shared/types";
import { ChangeEventHandler, FC, useState } from "react";

export const Statement: FC = () => {
  const [slip, setSlip] = useState<Slip>("RECEIPT");

  const onSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value } = e.target;
    setSlip(value as Slip);
  };

  return (
    <div id="stt-page">
      <Header />
      <Container>
        <div className="select-stt">
          <SelectSlip value={slip} onChange={onSelect} />
        </div>
        <div className="stt-panel">
          {slip === "RECEIPT" && <ReceiptSlip />}
          {slip === "WITHDRAWAL" && <WithdrawalSlip />}
          {slip === "TRANSFER" && <div>대체전표입니다</div>}
        </div>
      </Container>
    </div>
  );
};
