import { RestService } from "@/5.shared/api";
import { Paths } from "@/5.shared/constants";
import { SlipWriteRequest } from "../model/types";

export const write = async (sendData: SlipWriteRequest): Promise<void> => {
  await RestService.post<SlipWriteRequest>(Paths.slip.write, sendData);
};

export const deleteSlip = async (id: number): Promise<void> => {
  await RestService.delete<number>(Paths.slip.delete(id));
};
