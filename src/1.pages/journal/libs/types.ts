import { EntryModel } from "@/2.widgets/journal";

export type JournalActType = "ADD" | "DELETE" | "CLOSE" | "ONCHANGE-DATE";
export type JournalStatusType = "OPENED" | "MODIFYING" | "CLOSED";

export type JournalModel = {
  seq: number;
  date: Date | null;
  status: JournalStatusType;
  entries: EntryModel[];
};

type AddJournalActionType = { type: "ADD"; seq: number };
type DeleteJournalActionType = { type: "DELETE"; seq: number };
type ModifyJournalActionType = { type: "MODIFYING"; seq: number };
type CloseJournalActionType = {
  type: "CLOSE";
  seq: number;
  entries: EntryModel[];
};
type OnChangeDateActionType = {
  type: "ONCHANGE-DATE";
  seq: number;
  date: Date | null;
};

export type JournalActionType =
  | AddJournalActionType
  | ModifyJournalActionType
  | DeleteJournalActionType
  | CloseJournalActionType
  | OnChangeDateActionType;
