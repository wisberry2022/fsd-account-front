import { RestService } from "@/5.shared/api";
import { Paths } from "@/5.shared/constants";
import { AccountAddRequest } from "@/5.shared/types";

export const add = async (sendData: AccountAddRequest): Promise<void> => {
  await RestService.post<AccountAddRequest>(
    Paths.basicInfo.accountSubject.add,
    sendData
  );
};