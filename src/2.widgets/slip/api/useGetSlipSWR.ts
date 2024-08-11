import { SlipFilterRequestType } from "@/3.features/filter";
import { RestService } from "@/5.shared/api";
import { Paths } from "@/5.shared/constants";
import { Page, SlipList, SWRType } from "@/5.shared/types";
import useSWR from "swr";

export const useGetSlips = (
  page: number,
  size: number,
  request: SlipFilterRequestType
): SWRType<Page<SlipList>> => {
  const { data, mutate } = useSWR(
    [Paths.slip.getAll(page, size), "POST", request],
    async () => {
      const response = await RestService.post<
        SlipFilterRequestType,
        Page<SlipList>
      >(Paths.slip.getAll(page, size), request);
      return response;
    }
  );

  return { data, mutate };
};
