import { createContext, useContext } from "react";
import { Page, PagingContextType } from "../types";

export const PagingContext = createContext<PagingContextType>({
  pageable: {} as Page,
  limit: 0,
  range: 10,
  page: 0,
  size: 10,
  onClick: () => {},
  onLeft: () => {},
  onRight: () => {},
});

const usePageContext = () => useContext(PagingContext);

export default usePageContext;
