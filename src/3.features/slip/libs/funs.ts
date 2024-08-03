import { ObjType, SimpleEntry, Slip, TransferEntry } from "@/5.shared/types";
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

export const getSubject = (
  type: Slip,
  id: number,
  name: string
): ObjType<string | number> => {
  if (type === "RECEIPT") {
    return {
      creditId: id,
      credit: name,
    };
  }
  return {
    debitId: id,
    debit: name,
  };
};

export const getNewEntry = (seq: number): TransferEntry => {
  return {
    seq,
    debit: {
      id: null,
      subject: "",
      desc: "",
      amount: 0,
    },
    credit: {
      id: null,
      subject: "",
      desc: "",
      amount: 0,
    },
  };
};
