import { RestService } from "@/5.shared/api";
import { Paths } from "@/5.shared/constants";
import { SupplierResponse } from "@/5.shared/types";

export const getSuppliers = async (): Promise<SupplierResponse[]> => {
  return (
    await RestService.get<SupplierResponse[]>(Paths.basicInfo.supplier.getAll)
  ).data;
};
