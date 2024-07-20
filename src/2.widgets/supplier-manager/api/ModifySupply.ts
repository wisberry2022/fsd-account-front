import { RestService } from "@/5.shared/api";
import { Paths } from "@/5.shared/constants";
import { SupplierModifyRequest } from "@/5.shared/types";

export const modifySupplier = async (
  sendData: SupplierModifyRequest
): Promise<void> => {
  await RestService.put<SupplierModifyRequest>(
    Paths.basicInfo.supplier.update,
    sendData
  );
};
