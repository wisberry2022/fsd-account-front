import { RestService } from "@/5.shared/api";
import { Paths } from "@/5.shared/constants";
import { SlipWriteRequest } from "../model/types";
import { BasicSlip, PaperSlip } from "@/5.shared/types";

export const write = async (sendData: SlipWriteRequest): Promise<void> => {
  await RestService.post<SlipWriteRequest>(Paths.slip.write, sendData);
};

export const deleteSlip = async (id: number): Promise<void> => {
  await RestService.delete<number>(Paths.slip.delete(id));
};

export const update = async (sendData: BasicSlip): Promise<void> => {
  await RestService.put<BasicSlip>(Paths.slip.update, sendData);
};
