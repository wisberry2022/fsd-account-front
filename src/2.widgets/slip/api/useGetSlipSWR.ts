import { Paths } from "@/5.shared/constants";
import { Page, SlipList, SWRType } from "@/5.shared/types";
import useSWR from "swr";

export const useGetSlips = (
  page: number,
  size: number
): SWRType<Page<SlipList>> => {
  const { data, mutate } = useSWR(Paths.slip.getAll(page, size));

  return { data, mutate };
};
