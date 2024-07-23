import { SlipStatus } from "@/5.shared/types/slip-type";

type TransferEntryAddAction = { type: "ADD-ENTRY"; seq: number };
type TransferEntryOnChangeDateAction = {
  type: "ONCHANGE-DATE";
  date: Date | null;
};
type TransferEntryOnChangeAction = {
  type: "ONCHANGE-ENTRY";
  seq: number;
  ledger: "debit" | "credit";
  name: string;
  value: string | number;
};
type TransferEntryChangeStatusAction = {
  type: "CHANGE-STATUS";
  status: SlipStatus;
};
type TransferEntryDeleteAction = {
  type: "DELETE-ENTRY";
  seq: number;
};
type TransferInitAction = {
  type: "INIT";
};
type TransferEntrySubjectAction = {
  type: "CHANGE-SUBJECT";
  seq: number;
  ledger: "credit" | "debit";
  name: string;
  id: number;
};

export type TransferActionType =
  | TransferEntryAddAction
  | TransferEntryDeleteAction
  | TransferEntryOnChangeDateAction
  | TransferEntryOnChangeAction
  | TransferEntryChangeStatusAction
  | TransferInitAction
  | TransferEntrySubjectAction;
