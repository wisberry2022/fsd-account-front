export type EntryModel = {
  seq: number;
  debit: string;
  debitAmount: number | null;
  credit: string;
  creditAmount: number | null;
};

export type Entry = {
  id?: number;
  seq?: number;
  name: string;
};
