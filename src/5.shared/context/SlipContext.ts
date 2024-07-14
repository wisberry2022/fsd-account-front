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
    init: () => {},
  },
  WITHDRAWAL: {
    slip: {} as PaperSlip,
    onChange: () => {},
    onChangeDate: () => {},
    onChangeStatus: () => {},
    init: () => {},
  },
  TRANSFER: {
    slip: {} as TransferSlip,
    addEntry: () => {},
    deleteEntry: () => {},
    onChangeDate: () => {},
    onChangeEntry: () => {},
    onChangeStatus: () => {},
    init: () => {},
  },
});
