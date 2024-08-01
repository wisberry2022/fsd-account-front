import { BasicSlip, PaperSlip } from "@/5.shared/types";
import { ChangeEventHandler, useEffect, useReducer } from "react";
import { getSubject } from "./funs";

type Init = {
  type: "INIT";
  data: PaperSlip;
};
type OnSubjectAction = {
  type: "ONSUBJECT";
  id: number;
  name: string;
};
type OnChangeAction = {
  type: "ONCHANGE";
  name: string;
  value: number | string | Date | null;
};

type Action = OnChangeAction | OnSubjectAction | Init;

const isPaperSlip = (slip: BasicSlip): slip is PaperSlip => {
  return slip && typeof slip === "object";
};

const reducer = <T extends BasicSlip>(state: T, action: Action) => {
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
        const subject = getSubject(state.slip, action.id, action.name);
        return {
          ...state,
          subject: {
            ...state.subject,
            ...subject,
          },
        };
      }
      return state;
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

  const onSubject = (id: number, name: string) => {
    dispatch({ type: "ONSUBJECT", id, name });
  };

  return { state, onChange, onChangeDate, onSubject };
};
