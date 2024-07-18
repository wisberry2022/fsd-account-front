import { RestService } from "@/5.shared/api";
import { SupplierRequest } from "../model/Supplier";
import { Paths } from "./../../../5.shared/constants/paths";

export const add = async (sendData: SupplierRequest) => {
  await RestService.post<SupplierRequest>(
    Paths.basicInfo.supplier.add,
    sendData
  );
};
