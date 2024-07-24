import { Slip } from "@/5.shared/types";

export type SlipEntryRequest = {
  subjectId: number;
  desc: string;
  amount: number;
};

export interface SlipWriteRequest {
  slipType: Slip;
  transactionDateTime: Date | null;
}

export interface ReceiptSlipWriteRequest extends SlipWriteRequest {
  desc: string;
  amount: number;
  item: string;
  creditId: number;
}

export interface WithdrawalSlipWriteRequest extends SlipWriteRequest {
  desc: string;
  amount: number;
  item: string;
  debitId: number;
}

export interface TransferSlipWriteRequest extends SlipWriteRequest {
  credits: SlipEntryRequest[];
  debits: SlipEntryRequest[];
}
