import { Slip } from "@/5.shared/types";

export interface SlipWriteRequest {
  desc: string;
  amount: number;
  item: string;
  slipType: Slip;
  transactionDateTime: Date | null;
}

export interface ReceiptSlipWriteRequest extends SlipWriteRequest {
  creditId: number;
}

export interface WithdrawalSlipWriteRequest extends SlipWriteRequest {
  debitId: number;
}