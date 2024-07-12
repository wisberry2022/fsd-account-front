import { useContext } from "react";
import { SlipContext } from "../context";

const useSlipContext = (slip: "RECEIPT" | "WITHDRAWAL") =>
  useContext(SlipContext)[slip];

export default useSlipContext;
