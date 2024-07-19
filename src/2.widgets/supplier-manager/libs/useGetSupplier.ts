import { SupplierResponse, SWRType } from "@/5.shared/types";
import { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { Paths } from "@/5.shared/constants";

export const useGetSuppliers = ():SWRType<SupplierResponse[]> => {
  const { data, mutate } = useSWR<SupplierResponse[]>(
    Paths.basicInfo.supplier.getAll
  );
  return { data, mutate };
};
