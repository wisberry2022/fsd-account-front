import { ChangeEventHandler, FC, useState } from "react";
import { SlipProvider } from "../model/SlipProvider";
import { ReceiptSlip, TransferSlip, WithdrawalSlip } from "@/2.widgets/slip";
import { Slip } from "@/5.shared/types";
import { SelectSlip } from "@/3.features/slip";

const WriteSlip: FC = () => {
  const [slip, setSlip] = useState<Slip>("RECEIPT");

  const onSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value } = e.target;
    setSlip(value as Slip);
  };

  return (
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
  );
};

export default WriteSlip;
