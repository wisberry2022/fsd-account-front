import { FC, ReactNode } from "react";
import { SlipContext } from "../libs/SlipContext";
import { useReceiptSlip } from "./useReceiptSlip";

type SlipProviderProps = {
  children: ReactNode;
};

export const SlipProvider: FC<SlipProviderProps> = (props) => {
  const { children } = props;
  const rcptSlip = useReceiptSlip();

  console.log(rcptSlip.slip);

  return (
    <SlipContext.Provider value={{ receipt: rcptSlip }}>
      {children}
    </SlipContext.Provider>
  );
};
