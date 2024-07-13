import { ChangeEventHandler } from "react";

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

export type TransferSlip = {
  date: Date | null;
  status: SlipStatus;
  slip: Slip;
  entries: TransferEntry[];
};

export type TransferEntry = {
  seq: number;
  debit: SimpleEntry;
  credit: SimpleEntry;
};

export type SimpleEntry = {
  subject: string;
  desc: string;
  amount: number;
};

export type BasicSlipContext = {
  slip: PaperSlip;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onChangeDate: ChangeEventHandler<HTMLInputElement>;
  onChangeStatus: (status: SlipStatus) => void;
};

export type TransferSlipContext = {
  slip: TransferSlip;
  addEntry: () => void;
  onChangeDate: ChangeEventHandler<HTMLInputElement>;
  onChangeEntry: (seq: number, name: string, value: string | number) => void;
  onChangeStatus: (status: SlipStatus) => void;
};
