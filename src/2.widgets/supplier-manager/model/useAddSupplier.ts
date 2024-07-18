import { useDataHandler } from "@/5.shared/hooks";
import { Supplier, SupplierRequest } from "./Supplier";

export const useAddSupplier = () => {
  const handler = useDataHandler<SupplierRequest>(Supplier);

  return handler;
};
