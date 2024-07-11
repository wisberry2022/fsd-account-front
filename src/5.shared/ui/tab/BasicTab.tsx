import "./tab.css";
import {
  Children,
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  useState,
} from "react";

type BasicTabProps = {
  tabs: string[];
  children: ReactNode;
};

export const BasicTab: FC<BasicTabProps> = (props) => {
  const { tabs, children } = props;
  const [tabState, setTab] = useState<number>(0);

  const onClick = (panel: number) => {
    setTab(panel);
  };

  return (
    <>
      <ul className="tab">
        {tabs.map((tab, idx) => {
          return (
            <BasicTabPanel
              key={tab}
              onClick={() => onClick(idx)}
              isClicked={idx === tabState}
            >
              {tab}
            </BasicTabPanel>
          );
        })}
      </ul>
      <div className="content-panel">
        {Children.toArray(children).map((child, idx) =>
          tabState === idx ? cloneElement(child as ReactElement, {}) : null
        )}
      </div>
    </>
  );
};

type BasicTabPanelProps = {
  children: ReactNode;
  onClick: () => void;
  isClicked: boolean;
};

const BasicTabPanel: FC<BasicTabPanelProps> = (props) => {
  const { children, onClick, isClicked = false } = props;
  return (
    <li className={isClicked ? "on" : ""} onClick={onClick}>
      {children}
    </li>
  );
};
