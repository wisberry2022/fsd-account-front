import { Paths } from "@/5.shared/constants";
import { AccountResponse, SWRType } from "@/5.shared/types";
import useSWR from "swr";

export const useGetAllAccountSWR = (): SWRType<AccountResponse[]> => {
  const { data, mutate } = useSWR(Paths.basicInfo.accountSubject.getAll);

  return { data, mutate };
};

export const useGetAccountSWR = (id: number): SWRType<AccountResponse> => {
  const { data, mutate } = useSWR(Paths.basicInfo.accountSubject.get(id));

  return { data, mutate };
};
