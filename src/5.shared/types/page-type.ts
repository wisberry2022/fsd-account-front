export type Page<T = unknown> = {
  totalElements: number;
  totalPages: number;
  content: T[];
};
