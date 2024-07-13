import { EntryModel } from "@/5.shared/types";

export const getSpan = (
  entries: EntryModel[],
  entry: EntryModel,
  field: "credit" | "debit"
): number => {
  if (!entry[field]) {
    return 0;
  }
  const currentIdx = entries.findIndex((ent) => ent.seq === entry.seq);
  const nextEntryIdx = entries.findIndex(
    (ent) => ent.seq > entry.seq && ent[field]
  );
  return nextEntryIdx === -1
    ? entries.length - currentIdx
    : nextEntryIdx - currentIdx;
};
