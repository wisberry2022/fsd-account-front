import { RestService } from "@/5.shared/api";
import { ReceiptSlipWriteRequest, SlipWriteRequest } from "../model/types";
import { Paths } from "@/5.shared/constants";

export const write = async (sendData: SlipWriteRequest): Promise<void> => {
  await RestService.post<ReceiptSlipWriteRequest>(Paths.slip.write, sendData);
};
