import {
  BasicSlipContext,
  PaperSlip,
  TransferSlip,
  TransferSlipContext,
} from "@/5.shared/types";
import { createContext } from "react";

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
    deleteEntry: () => {},
    onChangeDate: () => {},
    onChangeEntry: () => {},
    onChangeStatus: () => {},
  },
});
