import { usePageContext } from "@/5.shared/context";
import { FC } from "react";
import { CorePaginaition } from "./CorePagination";

export const BasicPagination: FC = () => {
  const pages = usePageContext();

  return <CorePaginaition {...pages} />;
};
