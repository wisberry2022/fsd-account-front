import { RestService } from "@/5.shared/api";
import { Paths } from "@/5.shared/constants";
import { SupplierModifyRequest, SupplierRequest } from "@/5.shared/types";

export const add = async (sendData: SupplierRequest) => {
  await RestService.post<SupplierRequest>(
    Paths.basicInfo.supplier.add,
    sendData
  );
};

export const modify = async (
  sendData: SupplierModifyRequest
): Promise<void> => {
  await RestService.put<SupplierModifyRequest>(
    Paths.basicInfo.supplier.update,
    sendData
  );
};