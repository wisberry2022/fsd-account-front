import { Children, cloneElement, FC, ReactElement, ReactNode } from "react";

type DepthListCompound = FC<DepthListProps> & {
  SubList: FC<SubListProps>;
};

type DepthListProps = {
  title: string;
  children: ReactNode;
};

export const DepthList: DepthListCompound = (props) => {
  const { title, children } = props;

  return (
    <dl className="def-list">
      <dt>{title}</dt>
      <dd>{children}</dd>
    </dl>
  );
};

type SubListProps = {
  title: string;
  children: ReactNode;
};

const SubList: FC<SubListProps> = (props) => {
  const { title, children } = props;

  return (
    <dl>
      <dt>{title}</dt>
      <dd>
        {Children.toArray(children).map((child) =>
          cloneElement(child as ReactElement, {
            className: "srch-content",
          })
        )}
      </dd>
    </dl>
  );
};

DepthList.SubList = SubList;
