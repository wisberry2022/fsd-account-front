import { PaperSlip } from "@/5.shared/types";
import {
  ReceiptSlipWriteRequest,
  WithdrawalSlipWriteRequest,
} from "../model/types";

export const toReceiptSlipRequest = (
  slip: PaperSlip
): ReceiptSlipWriteRequest => {
  return {
    desc: slip.desc,
    amount: slip.amount,
    item: slip.item,
    slipType: slip.slip,
    transactionDateTime: slip.date,
    creditId: slip.subject.creditId,
  };
};

export const toWithdrawalSlipRequest = (
  slip: PaperSlip
): WithdrawalSlipWriteRequest => {
  return {
    desc: slip.desc,
    amount: slip.amount,
    item: slip.item,
    slipType: slip.slip,
    transactionDateTime: slip.date,
    debitId: slip.subject.debitId,
  };
};
