import { SlipFilterRequestType } from "@/3.features/filter";
import { RestService } from "@/5.shared/api";
import { Paths } from "@/5.shared/constants";
import { Page, SlipList } from "@/5.shared/types";

export const getSlips = async (
  page: number,
  size: number,
  request: SlipFilterRequestType
) => {
  const response = await RestService.post<
    SlipFilterRequestType,
    Page<SlipList[]>
  >(Paths.slip.getAll(page, size), request);
  return response;
};
