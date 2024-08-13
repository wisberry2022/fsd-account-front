import { SlipFilterRequest, SlipFilterRequestType } from "@/3.features/filter";
import { useReducer } from "react";

type OnChangeRegDttm = { type: "REG_DTTM"; name: string; value: Date };
type SlipFilterAction = OnChangeRegDttm;

const reducer = (state: SlipFilterRequestType, action: SlipFilterAction) => {
  switch (action.type) {
    case "REG_DTTM":
      return state;
    default:
      return state;
  }
};

export const SlipFilterProvider = () => {
  const [state, dispatch] = useReducer(reducer, SlipFilterRequest);

  return {
    state,
  };
};
