import { InfoCard } from "@/2.widgets/basic-info-card";
import "./css/index.css";
import { Container } from "@/2.widgets/container";
import { Header } from "@/2.widgets/header";
import { FC } from "react";
import BasicInfos from "../model/BasicInfos";
import { useKeywordPopover } from "@/5.shared/hooks";
import SupplierManager from "@/2.widgets/basic-info-card/ui/suppliier/SupplierManager";
import AccountManager from "@/2.widgets/supplier-manager/ui/AccountManager";

export const BasicInfo: FC = () => {
  const popover = useKeywordPopover<string>();

  return (
    <div id="basic-info">
      <Header />
      <Container>
        <section id="basic-info">
          <h2>기초정보 관리</h2>
          {BasicInfos.map((info) => (
            <InfoCard
              key={info.id}
              type={info.type}
              title={info.name as string}
              desc={info.desc as string}
              onClick={popover.onOpen}
            />
          ))}
        </section>
      </Container>
      {popover.open === "SUPPLIER" && (
        <SupplierManager open={!!popover.open} onClose={popover.onClose} />
      )}
      {popover.open === "ACCOUNT" && (
        <AccountManager open={!!popover.open} onClose={popover.onClose} />
      )}
    </div>
  );
};
