import { ShowInfoButton } from "@/3.features/basic-info";
import { usePopover } from "@/5.shared/hooks";
import { BasicInfo } from "@/5.shared/types";
import { Card } from "@/5.shared/ui";
import { FC } from "react";
import SupplierManager from "./suppliier/SupplierManager";
import AccountManager from "./account/AccountManager";

type InfoCardProps = {
  title: string;
  desc: string;
  type: BasicInfo;
};

export const InfoCard: FC<InfoCardProps> = (props) => {
  const { title, desc, type } = props;
  const popover = usePopover();

  return (
    <>
      <Card title={title} desc={desc} fullWidth>
        <ShowInfoButton onClick={popover.onToggle} />
      </Card>
      {type === "SUPPLIER" && (
        <SupplierManager open={popover.open} onClose={popover.onClose} />
      )}
      {type === "ACCOUNT" && (
        <AccountManager open={popover.open} onClose={popover.onClose} />
      )}
    </>
  );
};
