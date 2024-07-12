import { ObjType, PaperSlip, Slip } from "@/5.shared/types";
import { SlipStatus } from "@/5.shared/types/slip-type";
import { Dispatch, SetStateAction } from "react";

export const useSlipHandler = <T extends PaperSlip>(
  setter: Dispatch<SetStateAction<T>>
) => {
  const onChangeSlip = (type: Slip, name: string, value: string) => {
    const counterpart: ObjType<string> = {
      RECEIPT: "credit",
      WITHDRAWAL: "debit",
    };

    if (counterpart[type] === name) {
      setter((prev) => ({
        ...prev,
        subject: {
          ...prev.subject,
          [counterpart[type]]: value,
        },
      }));
      return;
    }
    setter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeSlipDate = (value: Date | null) => {
    setter((prev) => ({
      ...prev,
      date: value,
    }));
  };

  const onChangeSlipStatus = (status: SlipStatus) => {
    setter((prev) => ({
      ...prev,
      status,
    }));
  };

  return {
    onChangeSlip,
    onChangeSlipDate,
    onChangeSlipStatus,
  };
};
