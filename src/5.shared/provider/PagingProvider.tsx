import { Dispatch, FC, ReactElement, SetStateAction, useState } from "react";
import { PagingContext } from "../context";
import { Page } from "../types";

type PagingProviderProps<T = unknown> = {
  pageable: Page<T>;
  children: ReactElement;
  size: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const PagingProvider: FC<PagingProviderProps> = (props) => {
  const { pageable, children, size, page, setPage } = props;
  const [range, setRange] = useState<number>(0);

  const limit =
    range + 10 < (pageable?.totalPages as number)
      ? size
      : (pageable?.totalPages as number) - range;

  const onLeft = () => {
    setRange((prev) => prev - 10);
    setPage(range - 1);
  };

  const onRight = () => {
    setRange((prev) => prev + 10);
    setPage(range + 10);
  };

  const onClick = (page: number) => {
    setPage(page);
  };

  return (
    <PagingContext.Provider
      value={{ pageable, range, size, page, limit, onClick, onLeft, onRight }}
    >
      {children}
    </PagingContext.Provider>
  );
};
