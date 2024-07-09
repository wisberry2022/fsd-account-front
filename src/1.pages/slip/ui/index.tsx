import "./css/index.css";
import { Container } from "@/2.widgets/container";
import { Header } from "@/2.widgets/header";
import { ReceiptSlip } from "@/2.widgets/slip";
import { SelectStatement } from "@/3.features/slip";
import { FC } from "react";

export const Statement: FC = () => {
  return (
    <div id="stt-page">
      <Header />
      <Container>
        <div className="select-stt">
          <SelectStatement />
        </div>
        <div className="stt-panel">
          <ReceiptSlip />
        </div>
      </Container>
    </div>
  );
};
