import { useDataHandler } from "@/5.shared/hooks";
import { Supplier } from "./Supplier";
import { SupplierRequest } from "@/5.shared/types";
import { useEffect } from "react";

export const useAddSupplier = (state: string) => {
  const handler = useDataHandler<SupplierRequest>(Supplier);

  useEffect(() => {
    if (state === "MAIN") {
      handler.setState(Supplier);
    }
  }, [state, handler]);

  return handler;
};
