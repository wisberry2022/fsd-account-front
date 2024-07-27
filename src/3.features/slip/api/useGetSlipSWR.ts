import { Paths } from "@/5.shared/constants";
import { PaperSlip, SWRType } from "@/5.shared/types";
import useSWR from "swr";

export const useGetSlip = (id: number): SWRType<PaperSlip> => {
  const { data } = useSWR<PaperSlip>(Paths.slip.get(id));

  return { data };
};
