import { Paths } from "@/5.shared/constants";
import { SupplierResponse, SWRType } from "@/5.shared/types";
import useSWR from "swr";

export const useGetSuppliers = (): SWRType<SupplierResponse[]> => {
  const { data, mutate } = useSWR<SupplierResponse[]>(
    Paths.basicInfo.supplier.getAll
  );
  return { data, mutate };
};

export const useGetSupplier = (id: number): SWRType<SupplierResponse> => {
  const { data, mutate } = useSWR(Paths.basicInfo.supplier.get(id));

  return { data, mutate };
};
