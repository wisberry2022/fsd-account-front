import { useContext } from "react";
import { SlipContext } from "../context";

const useSlipContext = (slip: "receipt") => useContext(SlipContext)[slip];

export default useSlipContext;