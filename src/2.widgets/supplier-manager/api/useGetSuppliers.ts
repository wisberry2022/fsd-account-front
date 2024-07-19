import { Paths } from "@/5.shared/constants";
import { SupplierResponse, SWRType } from "@/5.shared/types";
import useSWR from "swr";

export const useGetSuppliers = (): SWRType<SupplierResponse[]> => {
  const { data, mutate } = useSWR<SupplierResponse[]>(
    Paths.basicInfo.supplier.getAll
  );
  return { data, mutate };
};
