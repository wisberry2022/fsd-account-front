import { PaperSlip } from "@/5.shared/types";
import { ChangeEventHandler, createContext } from "react";

type ReceiptContext = {
  slip: PaperSlip;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onChangeDate: ChangeEventHandler<HTMLInputElement>;
  onChangeStatus: (status: "OPENED" | "CLOSED" | "MODIFYING") => void;
};

type SlipContextType = {
  receipt: ReceiptContext;
};

export const SlipContext = createContext<SlipContextType>({
  receipt: {
    slip: {} as PaperSlip,
    onChange: () => {},
    onChangeDate: () => {},
    onChangeStatus: () => {},
  },
});
