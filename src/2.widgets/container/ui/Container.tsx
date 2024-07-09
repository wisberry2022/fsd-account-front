import { FC, ReactNode } from "react";
import "./css/index.css";

type ContanierProps = {
  children: ReactNode;
};

export const Container: FC<ContanierProps> = (props) => {
  const { children } = props;

  return <div className="container">{children}</div>;
};
