import { ShowInfoButton } from "@/3.features/basic-info";
import { Card } from "@/5.shared/ui";
import { FC } from "react";

type InfoCardProps = {
  title: string;
  desc: string;
};

export const InfoCard: FC<InfoCardProps> = (props) => {
  const { title, desc } = props;
  return (
    <Card title={title} desc={desc} fullWidth>
      <ShowInfoButton />
    </Card>
  );
};
