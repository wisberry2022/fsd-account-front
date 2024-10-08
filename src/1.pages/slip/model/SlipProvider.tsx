import { SlipContext } from "@/5.shared/context";
import { FC, ReactNode, useReducer } from "react";

import { getNewEntry } from "@/3.features/slip";
import { PaperSlip } from "@/5.shared/types";
import { SlipStatus, TransferSlip } from "@/5.shared/types/slip-type";
import { ChangeEventHandler, useState } from "react";
import { useSlipHandler } from "../libs/hooks";
import { TransferActionType } from "../libs/types";

// 입금전표
const rcptSlipState: PaperSlip = {
  date: null,
  status: "OPENED",
  slip: "RECEIPT",
  subject: {
    creditId: 0,
    credit: "",
    debitId: 0,
    debit: "현금",
  },
  desc: "",
  item: "",
  amount: 0,
};

const useReceiptSlip = () => {
  const [slip, setSlip] = useState<PaperSlip>(rcptSlipState);
  const { onChangeSlip, onChangeSlipDate, onChangeSlipStatus } =
    useSlipHandler<PaperSlip>(setSlip);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeSlip("RECEIPT", e.target.name, e.target.value);
  };

  const onChangeDate: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeSlipDate(e.target.valueAsDate);
  };

  const onChangeStatus = (status: SlipStatus) => {
    onChangeSlipStatus(status);
  };

  const init = () => {
    setSlip(rcptSlipState);
  };

  return {
    slip,
    setSlip,
    onChangeDate,
    onChange,
    onChangeStatus,
    init,
  };
};

// 출금전표
const wdrSlipState: PaperSlip = {
  date: null,
  slip: "WITHDRAWAL",
  status: "OPENED",
  subject: {
    creditId: 0,
    credit: "현금",
    debitId: 0,
    debit: "",
  },
  item: "",
  desc: "",
  amount: 0,
};

const useWithdrawalSlip = () => {
  const [slip, setSlip] = useState<PaperSlip>(wdrSlipState);
  const { onChangeSlip, onChangeSlipDate, onChangeSlipStatus } =
    useSlipHandler<PaperSlip>(setSlip);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeSlip("WITHDRAWAL", e.target.name, e.target.value);
  };

  const onChangeDate: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeSlipDate(e.target.valueAsDate);
  };

  const onChangeStatus = (status: SlipStatus) => {
    onChangeSlipStatus(status);
  };

  const init = () => {
    setSlip(wdrSlipState);
  };

  return {
    slip,
    setSlip,
    onChange,
    onChangeDate,
    onChangeStatus,
    init,
  };
};

const transferState: TransferSlip = {
  date: null,
  status: "OPENED",
  slip: "TRANSFER",
  entries: [
    {
      seq: 1,
      debit: {
        id: null,
        subjectId: null,
        subject: "",
        desc: "",
        amount: 0,
      },
      credit: {
        id: null,
        subjectId: null,
        subject: "",
        desc: "",
        amount: 0,
      },
    },
  ],
};

const transferReducer = (
  state: TransferSlip,
  action: TransferActionType
): TransferSlip => {
  switch (action.type) {
    case "ADD-ENTRY":
      return {
        ...state,
        entries: state.entries.concat(getNewEntry(action.seq)),
      };
    case "DELETE-ENTRY":
      return {
        ...state,
        entries: state.entries.filter((ent) => ent.seq !== action.seq),
      };
    case "ONCHANGE-DATE":
      return { ...state, date: action.date };
    case "ONCHANGE-ENTRY":
      return {
        ...state,
        entries: state.entries.map((ent) => {
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
    case "CHANGE-STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "INIT":
      return {
        ...transferState,
      };
    case "CHANGE-SUBJECT":
      return {
        ...state,
        entries: state.entries.map((ent) => {
          if (ent.seq === action.seq) {
            return {
              ...ent,
              [action.ledger]: {
                ...ent[action.ledger],
                subjectId: action.id,
                subject: action.name,
              },
            };
          }
          return ent;
        }),
      };
    default:
      return state;
  }
};

const useTransferSlip = () => {
  const [slip, dispatch] = useReducer(transferReducer, transferState);

  const addEntry = () => {
    const nextSeq = Math.max(...slip.entries.map((ent) => ent.seq)) + 1;
    dispatch({ type: "ADD-ENTRY", seq: nextSeq });
  };

  const deleteEntry = (seq: number) => {
    dispatch({ type: "DELETE-ENTRY", seq: seq });
  };

  const onChangeDate: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: "ONCHANGE-DATE", date: e.target.valueAsDate });
  };

  const onChangeEntry = (
    seq: number,
    ledger: "debit" | "credit",
    name: string,
    value: string | number
  ) => {
    dispatch({ type: "ONCHANGE-ENTRY", ledger, seq, name, value });
  };

  const onChangeSubject = (
    seq: number,
    ledger: "debit" | "credit",
    id: number,
    name: string
  ) => {
    dispatch({ type: "CHANGE-SUBJECT", seq, ledger, id, name });
  };

  const onChangeStatus = (status: SlipStatus) => {
    dispatch({ type: "CHANGE-STATUS", status });
  };

  const init = () => {
    dispatch({ type: "INIT" });
  };

  return {
    slip,
    addEntry,
    deleteEntry,
    onChangeDate,
    onChangeEntry,
    onChangeSubject,
    onChangeStatus,
    init,
  };
};

type SlipProviderProps = {
  children: ReactNode;
};

export const SlipProvider: FC<SlipProviderProps> = (props) => {
  const { children } = props;
  const receipt = useReceiptSlip();
  const withdrawal = useWithdrawalSlip();
  const transfer = useTransferSlip();

  return (
    <SlipContext.Provider
      value={{
        RECEIPT: receipt,
        WITHDRAWAL: withdrawal,
        TRANSFER: transfer,
      }}
    >
      {children}
    </SlipContext.Provider>
  );
};
