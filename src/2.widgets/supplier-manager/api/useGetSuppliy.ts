import { Paths } from "@/5.shared/constants";
import { SupplierResponse, SWRType } from "@/5.shared/types";
import useSWR from "swr";

const useGetSuppliy = (id: number): SWRType<SupplierResponse> => {
  const { data, mutate } = useSWR(Paths.basicInfo.supplier.get(id));

  return { data, mutate };
};

export default useGetSuppliy;
