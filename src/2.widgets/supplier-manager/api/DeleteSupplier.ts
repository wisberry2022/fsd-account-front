import { RestService } from "@/5.shared/api";
import { Paths } from "@/5.shared/constants";

export const deleteSupplier = async (ids: number[]): Promise<void> => {
  await RestService.delete<number[], void>(
    Paths.basicInfo.supplier.delete,
    ids
  );
};
