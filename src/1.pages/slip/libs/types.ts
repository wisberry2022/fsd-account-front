import { SlipStatus } from "@/5.shared/types/slip-type";

type TransferEntryAddAction = { type: "ADD-ENTRY"; seq: number };
type TransferEntryOnChangeDateAction = {
  type: "ONCHANGE-DATE";
  date: Date | null;
};
type TransferEntryOnChangeAction = {
  type: "ONCHANGE-ENTRY";
  seq: number;
  name: string;
  value: string | number;
};
type TransferEntryChangeStatusAction = {
  type: "CHANGE-STATUS";
  status: SlipStatus;
};

export type TransferActionType =
  | TransferEntryAddAction
  | TransferEntryOnChangeDateAction
  | TransferEntryOnChangeAction
  | TransferEntryChangeStatusAction;
