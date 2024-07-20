export type AccountCategory =
  | "CAPITAL"
  | "ASSET"
  | "DEBT"
  | "REVENUE"
  | "EXPENSE";
export type BasicInfo = "SUPPLIER" | "ACCOUNT";

export type SupplierRequest = {
  name: string;
  representationName: string;
  corpCode: string;
  address: string;
  category: string;
  main: "MAIN" | "SUB";
};

export type SupplierResponse = SupplierRequest & {
  id: number;
  regDttm: string;
  modDttm: string;
};

export type SupplierModifyRequest = {
  id: number;
  name: string;
  representationName: string;
  corpCode: string;
  address: string;
  category: string;
  main: "MAIN" | "SUB";
};

export type AccountAddRequest = {
  category: AccountCategory;
  name: string;
  code: string;
  activated: boolean;
};
