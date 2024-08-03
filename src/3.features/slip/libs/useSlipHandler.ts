import { BasicSlip, PaperSlip, TransferSlip } from "@/5.shared/types";
import { ChangeEventHandler, useEffect, useReducer } from "react";
import { getSubject } from "./funs";
import { Action } from "./types";

const isPaperSlip = (slip: BasicSlip): slip is PaperSlip => {
  return slip && typeof slip === "object";
};

const reducer = (state: BasicSlip, action: Action) => {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "ONCHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "ONSUBJECT":
      if (isPaperSlip(state)) {
        const subject = getSubject(state.slip, action.subjectId, action.name);
        return {
          ...state,
          subject: {
            ...state.subject,
            ...subject,
          },
        };
      }
      return state;
    case "ONCHANGE-ENTRY":
      return {
        ...state,
        entries: (state as TransferSlip)?.entries.map((ent) => {
          if (ent.seq === action.seq) {
            return {
              ...ent,
              [action.ledger]: {
                ...ent[action.ledger],
                [action.name]: action.value,
              },
            };
          }
          return ent;
        }),
      };
    case "ONSUBJECT-TRANSFER":
      return {
        ...state,
        entries: (state as TransferSlip)?.entries.map((ent) => {
          if (ent.seq === action.seq) {
            return {
              ...ent,
              [action.ledger]: {
                ...ent[action.ledger],
                id: action.subjectId,
                subject: action.name,
              },
            };
          }
          return ent;
        }),
      };
    case "ONDELETE-ENTRY":
      return {
        ...state,
        entries: (state as TransferSlip)?.entries.filter(
          (ent) => ent.seq !== action.seq
        ),
      };
    default:
      return state;
  }
};

export const useSlipHandler = (slip: BasicSlip) => {
  const [state, dispatch] = useReducer(reducer, slip);

  useEffect(() => {
    if (slip) {
      dispatch({ type: "INIT", data: slip as PaperSlip });
    }
  }, [slip]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ONCHANGE", name, value });
  };

  const onChangeDate: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name } = e.target;
    dispatch({ type: "ONCHANGE", name, value: e.target.valueAsDate });
  };

  const onSubject = (subjectId: number, name: string) => {
    dispatch({ type: "ONSUBJECT", subjectId, name });
  };

  const onChangeEntry = (
    seq: number,
    ledger: "debit" | "credit",
    name: string,
    value: string | number
  ) => {
    dispatch({ type: "ONCHANGE-ENTRY", ledger, seq, name, value });
  };

  const onTransferSubject = (
    seq: number,
    ledger: "debit" | "credit",
    subjectId: number,
    name: string
  ) => {
    dispatch({ type: "ONSUBJECT-TRANSFER", seq, ledger, subjectId, name });
  };

  const deleteEntry = (seq: number) => {
    dispatch({ type: "ONDELETE-ENTRY", seq });
  };

  return {
    state,
    onChange,
    onChangeDate,
    onSubject,
    onChangeEntry,
    onTransferSubject,
    deleteEntry,
  };
};
