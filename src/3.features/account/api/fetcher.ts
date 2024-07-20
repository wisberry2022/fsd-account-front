import { RestService } from "@/5.shared/api";
import { Paths } from "@/5.shared/constants";
import { AccountAddRequest } from "@/5.shared/types";

export const deletes = async (ids: number[]): Promise<void> => {
  await RestService.delete<number[]>(
    Paths.basicInfo.accountSubject.delete,
    ids
  );
};

export const autoAdd = async (sendData: AccountAddRequest[]): Promise<void> => {
  await RestService.post<AccountAddRequest[]>(
    Paths.basicInfo.accountSubject.autoAdd,
    sendData
  );
};
