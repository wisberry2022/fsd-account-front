import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

export type Slip = "RECEIPT" | "WITHDRAWAL" | "TRANSFER";
export type SlipStatus = "OPENED" | "MODIFYING" | "STAGING" | "CLOSED";

export type PaperSlip = {
  date: Date | null;
  status: SlipStatus;
  slip: Slip;
  subject: {
    creditId?: number;
    credit: string;
    debitId?: number;
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
  id: number | null | undefined;
  subject: string;
  desc: string;
  amount: number;
};

export type SlipList = {
  id: number;
  type: Slip;
  desc: string;
  transDttm: string | null;
  regDttm: string | null;
};

export type BasicSlipContext = {
  slip: PaperSlip;
  setSlip: Dispatch<SetStateAction<PaperSlip>>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onChangeDate: ChangeEventHandler<HTMLInputElement>;
  onChangeStatus: (status: SlipStatus) => void;
  init: () => void;
};

export type TransferSlipContext = {
  slip: TransferSlip;
  addEntry: () => void;
  deleteEntry: (seq: number) => void;
  onChangeDate: ChangeEventHandler<HTMLInputElement>;
  onChangeEntry: (
    seq: number,
    ledger: "debit" | "credit",
    name: string,
    value: string | number
  ) => void;
  onChangeStatus: (status: SlipStatus) => void;
  onChangeSubject: (
    seq: number,
    ledger: "debit" | "credit",
    id: number,
    name: string
  ) => void;
  init: () => void;
};
