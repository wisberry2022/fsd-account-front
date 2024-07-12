import { PaperSlip } from "@/5.shared/types";
import { ChangeEventHandler, createContext } from "react";
import { SlipStatus } from "../types/slip-type";

type BasicSlipContext = {
  slip: PaperSlip;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onChangeDate: ChangeEventHandler<HTMLInputElement>;
  onChangeStatus: (status: SlipStatus) => void;
};

type SlipContextType = {
  RECEIPT: BasicSlipContext;
  WITHDRAWAL: BasicSlipContext;
};

export const SlipContext = createContext<SlipContextType>({
  RECEIPT: {
    slip: {} as PaperSlip,
    onChange: () => {},
    onChangeDate: () => {},
    onChangeStatus: () => {},
  },
  WITHDRAWAL: {
    slip: {} as PaperSlip,
    onChange: () => {},
    onChangeDate: () => {},
    onChangeStatus: () => {},
  },
});
