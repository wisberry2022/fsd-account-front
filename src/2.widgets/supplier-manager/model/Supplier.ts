export type SupplierRequest = {
  name: string;
  representationName: string;
  corpCode: string;
  address: string;
  category: string;
  main: "MAIN" | "SUB";
};

export const Supplier: SupplierRequest = {
  name: "",
  representationName: "",
  corpCode: "",
  address: "",
  category: "",
  main: "SUB",
};
