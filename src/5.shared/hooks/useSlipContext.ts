import { useContext } from "react";
import { SlipContext } from "../context";
import { Slip } from "../types";

const useSlipContext = (slip: Slip) => useContext(SlipContext)[slip];

export default useSlipContext;
