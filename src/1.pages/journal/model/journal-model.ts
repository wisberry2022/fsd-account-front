import { useReducer } from "react";
import { JournalActionType, JournalModel } from "../libs/types";
import { EntryModel } from "@/2.widgets/journal";

const getNewJournal = (seq: number): JournalModel => ({
  seq: seq,
  status: "OPENED",
  date: new Date(Date.now()),
  entries: [
    {
      seq: 1,
      debit: "",
      debitAmount: 0,
      credit: "",
      creditAmount: 0,
    },
  ],
});

const initialState: JournalModel[] = [
  {
    seq: 1,
    date: new Date(Date.now()),
    status: "OPENED",
    entries: [
      {
        seq: 1,
        debit: "",
        debitAmount: 0,
        credit: "",
        creditAmount: 0,
      },
    ],
  },
];

const reducer = (
  state: JournalModel[],
  action: JournalActionType
): JournalModel[] => {
  switch (action.type) {
    case "ADD":
      return state.concat(getNewJournal(action.seq));
    case "DELETE":
      return state.filter((stt) => stt.seq !== action.seq);
    case "CLOSE":
      return state.map((stt) => {
        if (stt.seq === action.seq)
          return { ...stt, status: "CLOSED", entries: action.entries };
        return stt;
      });
    case "MODIFYING":
      return state.map((stt) => {
        if (stt.seq === action.seq) return { ...stt, status: "MODIFYING" };
        return stt;
      });
    case "ONCHANGE-DATE":
      return state.map((stt) => {
        if (stt.seq === action.seq) {
          return { ...stt, date: action.date };
        }
        return stt;
      });
    default:
      return state;
  }
};

const useJournal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addJournal = () => {
    const nextSeq = state.length
      ? Math.max(...state.map((stt) => stt.seq)) + 1
      : 1;
    dispatch({ type: "ADD", seq: nextSeq });
  };

  const deleteJournal = (seq: number) => {
    dispatch({ type: "DELETE", seq: seq });
  };

  const modifyJournal = (seq: number) => {
    dispatch({ type: "MODIFYING", seq: seq });
  };

  const closeJournal = (seq: number, entries: EntryModel[]) => {
    dispatch({ type: "CLOSE", seq: seq, entries: entries });
  };

  const onChangeDate = (seq: number, date: Date | null) => {
    dispatch({ type: "ONCHANGE-DATE", seq: seq, date: date });
  };

  return {
    state,
    addJournal,
    deleteJournal,
    modifyJournal,
    closeJournal,
    onChangeDate,
  };
};

export default useJournal;
