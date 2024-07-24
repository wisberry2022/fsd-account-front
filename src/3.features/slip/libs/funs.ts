import { SimpleEntry } from "@/5.shared/types";
import { SlipEntryRequest } from "../model/types";

export const extractSlipEntryRequest = (
  entries: SimpleEntry[]
): SlipEntryRequest[] => {
  return entries
    .filter((ent) => ent.id)
    .map((ent) => ({
      amount: ent.amount,
      desc: ent.desc,
      subjectId: ent.id as number,
    }));
};
