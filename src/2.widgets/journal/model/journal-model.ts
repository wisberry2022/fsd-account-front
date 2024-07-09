import { useReducer } from "react";
import { EntryModelActionType } from "../libs/types";
import { EntryModel } from "@/5.shared/types";

const getNewEntry = (seq: number): EntryModel => ({
  seq,
  credit: "",
  creditAmount: null,
  debit: "",
  debitAmount: null,
});

const reducer = (state: EntryModel[], action: EntryModelActionType) => {
  switch (action.type) {
    case "ADD":
      return state.concat(getNewEntry(action.entry));
    case "DELETE":
      return state.filter((entry) => entry.seq !== action.entry);
    case "ONCHANGE":
      return state.map((entry) => {
        if (entry.seq === action.seq) {
          return {
            ...entry,
            [action.name]: action.value,
          };
        }
        return entry;
      });
    default:
      return state;
  }
};

const useJournalModal = (entry: EntryModel[]) => {
  const [state, dispatch] = useReducer(reducer, entry);

  const addEntry = (seq: number) => {
    dispatch({ type: "ADD", entry: seq });
  };

  const deleteEntry = (seq: number) => {
    dispatch({ type: "DELETE", entry: seq });
  };

  const onChangeEntry = (seq: number, name: string, value: string) => {
    dispatch({ type: "ONCHANGE", seq: seq, name: name, value: value });
  };

  return {
    state,
    addEntry,
    deleteEntry,
    onChangeEntry,
  };
};

export default useJournalModal;
