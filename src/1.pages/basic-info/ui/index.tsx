import { InfoCard } from "@/2.widgets/basic-info-card";
import "./css/index.css";
import { Container } from "@/2.widgets/container";
import { Header } from "@/2.widgets/header";
import { FC } from "react";
import BasicInfos from "../model/BasicInfos";

export const BasicInfo: FC = () => {
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
            />
          ))}
        </section>
      </Container>
    </div>
  );
};
