type EntryModelAddAction = { type: "ADD"; entry: number };
type EntryModelDeleteAction = { type: "DELETE"; entry: number };
type EntryModelOnChangeAction = {
  type: "ONCHANGE";
  seq: number;
  name: string;
  value: string;
};

export type EntryModelActionType =
  | EntryModelAddAction
  | EntryModelDeleteAction
  | EntryModelOnChangeAction;
