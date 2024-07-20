import { BasicInfo } from "@/5.shared/types";
import { Card } from "@/5.shared/ui";
import { FC } from "react";
import { ShowInfoButton } from "./ShowInfo";

type InfoCardProps = {
  title: string;
  desc: string;
  type: BasicInfo;
  onClick: (type: string) => void;
};

export const InfoCard: FC<InfoCardProps> = (props) => {
  const { title, desc, type, onClick } = props;

  return (
    <>
      <Card title={title} desc={desc} fullWidth>
        <ShowInfoButton onClick={() => onClick(type)} />
      </Card>
    </>
  );
};
