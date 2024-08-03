import { ObjType, SimpleEntry, Slip, TransferEntry } from "@/5.shared/types";
import { SlipEntryRequest } from "../model/types";

export const extractSlipEntryRequest = (
  entries: SimpleEntry[]
): SlipEntryRequest[] => {
  return entries
    .filter((ent) => ent.subjectId)
    .map((ent) => ({
      amount: ent.amount,
      desc: ent.desc,
      subjectId: ent.subjectId as number,
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
      subjectId: null,
      desc: "",
      amount: 0,
    },
    credit: {
      id: null,
      subject: "",
      subjectId: null,
      desc: "",
      amount: 0,
    },
  };
};
