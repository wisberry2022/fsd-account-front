import { RestService } from "@/5.shared/api";
import { Paths } from "./../../../5.shared/constants/paths";
import { SupplierRequest } from "@/5.shared/types";

export const add = async (sendData: SupplierRequest) => {
  await RestService.post<SupplierRequest>(
    Paths.basicInfo.supplier.add,
    sendData
  );
};
