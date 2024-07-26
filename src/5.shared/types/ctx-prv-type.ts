import { Page } from "./page-type";

export type PagingContextType = {
  pageable: Page;
  page: number;
  size: number;
  range: number;
  limit: number;
  onLeft: () => void;
  onRight: () => void;
  onClick: (page: number) => void;
};
