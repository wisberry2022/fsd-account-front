import { useDataHandler } from "@/5.shared/hooks";
import { Supplier } from "./Supplier";
import { SupplierRequest } from "@/5.shared/types";

export const useAddSupplier = () => {
  const handler = useDataHandler<SupplierRequest>(Supplier);

  return handler;
};
