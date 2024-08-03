import { PaperSlip } from "@/5.shared/types";

type Init = {
  type: "INIT";
  data: PaperSlip;
};
type OnSubjectAction = {
  type: "ONSUBJECT";
  subjectId: number;
  name: string;
};
type OnChangeAction = {
  type: "ONCHANGE";
  name: string;
  value: number | string | Date | null;
};
type OnChangeEntryAction = {
  type: "ONCHANGE-ENTRY";
  seq: number;
  ledger: "debit" | "credit";
  name: string;
  value: string | number;
};
type OnTransferSubjectAtion = {
  type: "ONSUBJECT-TRANSFER";
  seq: number;
  ledger: "debit" | "credit";
  subjectId: number;
  name: string;
};
type OnDeleteEntryAction = {
  type: "ONDELETE-ENTRY";
  seq: number;
};

export type Action =
  | OnChangeAction
  | OnSubjectAction
  | Init
  | OnChangeEntryAction
  | OnTransferSubjectAtion
  | OnDeleteEntryAction;
