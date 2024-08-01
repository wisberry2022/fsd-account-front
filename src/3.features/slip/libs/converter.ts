import { PaperSlip, TransferSlip } from "@/5.shared/types";
import {
  ReceiptSlipWriteRequest,
  TransferSlipWriteRequest,
  WithdrawalSlipWriteRequest,
} from "../model/types";
import { extractSlipEntryRequest } from "./funs";

export const toReceiptSlipRequest = (
  slip: PaperSlip
): ReceiptSlipWriteRequest => {
  return {
    desc: slip.desc,
    amount: slip.amount,
    item: slip.item,
    slipType: slip.slip,
    transactionDateTime: slip.date,
    creditId: slip.subject.creditId as number,
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
    debitId: slip.subject.debitId as number,
  };
};

export const toTransferSlipRequest = (
  slip: TransferSlip
): TransferSlipWriteRequest => {
  return {
    slipType: slip.slip,
    transactionDateTime: slip.date,
    credits: extractSlipEntryRequest(slip.entries.map((ent) => ent.credit)),
    debits: extractSlipEntryRequest(slip.entries.map((ent) => ent.debit)),
  };
};
