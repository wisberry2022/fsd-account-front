import { EntryModel } from "@/5.shared/types";

export const getDateFormat = (dateObj: Date | null): string => {
  if (!dateObj) {
    return "일자 미지정";
  }
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const day = dateObj.getDay();

  const dayMapper: { [key: number]: string } = {
    0: "일요일",
    1: "월요일",
    2: "화요일",
    3: "수요일",
    4: "목요일",
    5: "금요일",
    6: "토요일",
  };

  return `${year}-${month}-${date}-${dayMapper[day]}`;
};

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
