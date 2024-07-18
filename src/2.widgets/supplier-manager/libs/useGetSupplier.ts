import { SupplierResponse } from "@/5.shared/types";
import { useEffect, useState } from "react";
import { getSuppliers } from "../api/GetSupply";

export const useGetSuppliers = () => {
  const [suppliers, setSuppliers] = useState<SupplierResponse[]>([]);

  useEffect(() => {
    (async () => {
      const list = await getSuppliers();
      setSuppliers(list);
    })();
  }, []);

  return suppliers;
};
