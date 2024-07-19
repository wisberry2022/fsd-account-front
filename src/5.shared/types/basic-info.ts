export type BasicInfo = "SUPPLIER" | "ACCOUNT";

export type SupplierRequest = {
  name: string;
  representationName: string;
  corpCode: string;
  address: string;
  category: string;
  main: "MAIN" | "SUB";
  regDttm: string;
  modDttm: string;
};

export type SupplierResponse = SupplierRequest & {
  id: number;
};
