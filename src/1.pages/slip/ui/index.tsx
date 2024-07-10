import "./css/index.css";
import { Container } from "@/2.widgets/container";
import { Header } from "@/2.widgets/header";
import { ReceiptSlip, TransferSlip, WithdrawalSlip } from "@/2.widgets/slip";
import { SelectSlip } from "@/3.features/slip";
import { Slip } from "@/5.shared/types";
import { ChangeEventHandler, FC, useState } from "react";

export const Statement: FC = () => {
  const [tab, setTab] = useState<string>("write");
  const [slip, setSlip] = useState<Slip>("RECEIPT");

  const onSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value } = e.target;
    setSlip(value as Slip);
  };

  return (
    <div id="slip-page">
      <Header />
      <Container>
        <ul className="tab">
          <li onClick={() => setTab("write")}>전표 작성</li>
          <li onClick={() => setTab("list")}>전표 목록 보기</li>
        </ul>
        {tab === "list" && <div>전표 목록</div>}
        {tab === "write" && (
          <>
            <div className="select-stt">
              <SelectSlip value={slip} onChange={onSelect} />
            </div>
            <div className="stt-panel">
              {slip === "RECEIPT" && <ReceiptSlip />}
              {slip === "WITHDRAWAL" && <WithdrawalSlip />}
              {slip === "TRANSFER" && <TransferSlip />}
            </div>
          </>
        )}
      </Container>
    </div>
  );
};
