export type Slip = "RECEIPT" | "WITHDRAWAL" | "TRANSFER";
export type SlipStatus = "OPENED" | "MODIFYING" | "CLOSED";

export type PaperSlip = {
  date: Date | null;
  status: SlipStatus;
  slip: Slip;
  subject: {
    credit: string;
    debit: string;
  };
  desc: string;
  amount: number;
  item: string;
};
