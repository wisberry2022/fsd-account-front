import { PaperSlip } from "@/5.shared/types";
import { ChangeEventHandler, useState } from "react";

const initialState: PaperSlip = {
  date: null,
  status: "OPENED",
  slip: "RECEIPT",
  subject: {
    credit: "현금",
    debit: "",
  },
  desc: "",
  item: "",
  amount: 0,
};

export const useReceiptSlip = () => {
  const [slip, setSlip] = useState<PaperSlip>(initialState);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    if (["debit", "credit"].includes(name)) {
      setSlip((prev) => ({
        ...prev,
        subject: {
          ...prev.subject,
          debit: value,
        },
      }));
      return;
    }
    setSlip((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeDate: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSlip((prev) => ({
      ...prev,
      date: e.target.valueAsDate,
    }));
  };

  const onChangeStatus = (status: "OPENED" | "MODIFYING" | "CLOSED") => {
    setSlip((prev) => ({
      ...prev,
      status,
    }));
  };

  return {
    slip,
    onChangeDate,
    onChange,
    onChangeStatus,
  };
};
