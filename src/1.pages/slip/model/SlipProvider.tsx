import { FC, ReactNode } from "react";
import { SlipContext } from "@/5.shared/context";

import { PaperSlip } from "@/5.shared/types";
import { ChangeEventHandler, useState } from "react";
import { SlipStatus } from "@/5.shared/types/slip-type";
import { useSlipHandler } from "../libs/hooks";

// 입금전표
const rcptSlipState: PaperSlip = {
  date: null,
  status: "OPENED",
  slip: "RECEIPT",
  subject: {
    credit: "",
    debit: "현금",
  },
  desc: "",
  item: "",
  amount: 0,
};

const useReceiptSlip = () => {
  const [slip, setSlip] = useState<PaperSlip>(rcptSlipState);
  const { onChangeSlip, onChangeSlipDate, onChangeSlipStatus } =
    useSlipHandler<PaperSlip>(setSlip);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeSlip("RECEIPT", e.target.name, e.target.value);
  };

  const onChangeDate: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeSlipDate(e.target.valueAsDate);
  };

  const onChangeStatus = (status: SlipStatus) => {
    onChangeSlipStatus(status);
  };

  return {
    slip,
    onChangeDate,
    onChange,
    onChangeStatus,
  };
};

// 출금전표
const wdrSlipState: PaperSlip = {
  date: null,
  slip: "WITHDRAWAL",
  status: "OPENED",
  subject: {
    credit: "현금",
    debit: "",
  },
  item: "",
  desc: "",
  amount: 0,
};

const useWithdrawalSlip = () => {
  const [slip, setSlip] = useState<PaperSlip>(wdrSlipState);
  const { onChangeSlip, onChangeSlipDate, onChangeSlipStatus } =
    useSlipHandler<PaperSlip>(setSlip);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeSlip("WITHDRAWAL", e.target.name, e.target.value);
  };

  const onChangeDate: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeSlipDate(e.target.valueAsDate);
  };

  const onChangeStatus = (status: SlipStatus) => {
    onChangeSlipStatus(status);
  };

  return {
    slip,
    onChange,
    onChangeDate,
    onChangeStatus,
  };
};

type SlipProviderProps = {
  children: ReactNode;
};

export const SlipProvider: FC<SlipProviderProps> = (props) => {
  const { children } = props;
  const receipt = useReceiptSlip();
  const withdrawal = useWithdrawalSlip();

  console.log("RECEIPT", receipt.slip);
  console.log("WITHDRAWAL ", withdrawal.slip);

  return (
    <SlipContext.Provider value={{ RECEIPT: receipt, WITHDRAWAL: withdrawal }}>
      {children}
    </SlipContext.Provider>
  );
};
