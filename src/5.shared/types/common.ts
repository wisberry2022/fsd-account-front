import { KeyedMutator } from "swr";

export type SWRType<T> = {
  data: T | undefined;
  mutate: KeyedMutator<T>;
};

export interface AuditType {
  modDttm: string;
  regDttm: string;
}