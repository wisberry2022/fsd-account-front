import "./css/index.css";
import { Container } from "@/2.widgets/container/ui/Container";
import { Header } from "@/2.widgets/header";
import { FC } from "react";
import { ClosedJournal, Journal as JournalWidget } from "@/2.widgets/journal";
import useJournal from "../model/journal-model";
import { AddJournal } from "@/3.features/journal";

// ToDo: 분개 완료 시 분개 완료에 해당하는 Widget 생성
export const Journal: FC = () => {
  const { state, addJournal, modifyJournal, ...handlerJournal } = useJournal();

  return (
    <div id="jnl-page">
      <Header />
      <Container>
        {state.map((jnl) => {
          if (jnl.status === "CLOSED") {
            return (
              <ClosedJournal modifyJournal={modifyJournal} journal={jnl} />
            );
          }
          return (
            <JournalWidget
              key={jnl.seq}
              jnlSeq={jnl.seq}
              entries={jnl.entries}
              {...handlerJournal}
            />
          );
        })}
        <AddJournal addJournal={addJournal} />
      </Container>
    </div>
  );
};
