import { Paths } from "@/5.shared/constants";
import { BasicSlip, SWRType } from "@/5.shared/types";
import useSWR from "swr";

export const useGetSlip = (id: number): SWRType<BasicSlip> => {
  const { data, mutate } = useSWR<BasicSlip>(Paths.slip.get(id));

  return { data, mutate };
};
