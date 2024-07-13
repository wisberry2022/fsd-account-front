import { PaperSlip } from "@/5.shared/types";
import { createContext } from "react";
import {
  BasicSlipContext,
  TransferSlip,
  TransferSlipContext,
} from "../types/slip-type";

type SlipContextType = {
  RECEIPT: BasicSlipContext;
  WITHDRAWAL: BasicSlipContext;
  TRANSFER: TransferSlipContext;
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
  TRANSFER: {
    slip: {} as TransferSlip,
    addEntry: () => {},
    onChangeDate: () => {},
    onChangeEntry: () => {},
    onChangeStatus: () => {},
  },
});
