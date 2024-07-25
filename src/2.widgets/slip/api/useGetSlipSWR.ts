import { Paths } from "@/5.shared/constants";
import { SlipList, SWRType } from "@/5.shared/types";
import useSWR from "swr";

export const useGetSlips = (
  page: number,
  size: number
): SWRType<SlipList[]> => {
  const { data, mutate } = useSWR(Paths.slip.getAll(page, size));

  return { data, mutate };
};
