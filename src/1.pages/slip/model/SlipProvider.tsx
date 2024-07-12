import { FC, ReactNode } from "react";
import { useReceiptSlip } from "./useReceiptSlip";
import { SlipContext } from "@/5.shared/context";

type SlipProviderProps = {
  children: ReactNode;
};

export const SlipProvider: FC<SlipProviderProps> = (props) => {
  const { children } = props;
  const rcptSlip = useReceiptSlip();

  return (
    <SlipContext.Provider value={{ receipt: rcptSlip }}>
      {children}
    </SlipContext.Provider>
  );
};
