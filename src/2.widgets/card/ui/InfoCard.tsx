import { ShowInfoButton } from "@/3.features/basic-info";
import { BasicInfo } from "@/5.shared/types";
import { Card } from "@/5.shared/ui";
import { FC } from "react";

type InfoCardProps = {
  title: string;
  desc: string;
  type: BasicInfo;
};

export const InfoCard: FC<InfoCardProps> = (props) => {
  const { title, desc, type } = props;
  return (
    <Card title={title} desc={desc} fullWidth>
      <ShowInfoButton type={type} />
    </Card>
  );
};
