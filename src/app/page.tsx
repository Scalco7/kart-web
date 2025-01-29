'use client'

import Header from "@/components/atoms/header/header";
import styles from "./page.module.css";
import Ranking from "@/components/molecules/ranking/ranking";
import { Participant } from "@/utils/interfaces";
import Teams from "@/components/molecules/teams/teams";

export default function Home() {
  const teamRanking: Participant[] = [
    { name: 'Peugeot', points: 7 },
    { name: 'Mclaren', points: 7 },
    { name: 'Ferrari', points: 0 },
    { name: 'Red Bull', points: 2 },
    { name: 'Aston Martin', points: 5 },
    { name: 'Mercedes', points: 1 },
  ]

  const pilotRanking: Participant[] = [
    { name: 'Tiago', points: 1 },
    { name: 'Cadu', points: 0 },
    { name: 'Johnatan', points: 0 },
    { name: 'Nicholas', points: 7 },
    { name: 'G. Klisman', points: 0 },
    { name: 'G. Scalco', points: 0 },
    { name: 'Sandro', points: 0 },
    { name: 'G. Pessi', points: 3 },
    { name: 'F. Scalco', points: 2 },
    { name: 'Murilo', points: 4 },
    { name: 'Henrique', points: 5 },
    { name: 'Matheus', points: 0 },
  ]

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.body}>
        <Teams />
        <div className={styles.rankings}>
          <Ranking title={"Ranking Escuderias"} participants={teamRanking} />
          <Ranking title={"Ranking Pilotos"} participants={pilotRanking} />
        </div>
      </main>
    </div>
  );
}
