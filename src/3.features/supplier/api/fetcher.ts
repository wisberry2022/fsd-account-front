import { RestService } from "@/5.shared/api";
import { Paths } from "@/5.shared/constants";

export const deletes = async (ids: number[]): Promise<void> => {
  await RestService.delete<number[]>(Paths.basicInfo.supplier.delete, ids);
};
