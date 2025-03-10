'use client'

import Header from "@/components/atoms/header/header";
import styles from "./page.module.css";
import Ranking from "@/components/molecules/ranking/ranking";
import { RankingPosition, teamEnum } from "@/utils/interfaces";
import Teams from "@/components/molecules/teams/teams";
import { pilots, races } from "@/utils/consts";
import { getPointsByPosition } from "@/utils/pilotRanking";

function calcPilotRanking(): RankingPosition[] {
  const ranking: RankingPosition[] = pilots.map(p => ({ name: p.name, points: 0, team: p.team }))

  races.forEach(racing => {
    racing.participants.forEach(participant => {
      const participantPoints = getPointsByPosition(participant.position)
      
      if (participantPoints > 0) {
        ranking.find(pilot => pilot.name == participant.name)!.points += participantPoints
      }
    })
  })

  return ranking
}

function calcTeamRanking(pilotRanking: RankingPosition[]): RankingPosition[] {
  const ranking: RankingPosition[] = []

  pilots.forEach(pilot => {
    const points = pilotRanking.find(pr => pr.name == pilot.name)!.points

    let rankingPosition: RankingPosition | undefined = ranking.find(rp => rp.team == pilot.team)

    if (rankingPosition) {
      rankingPosition.points += points
    }
    else {
      rankingPosition = {
        name: teamEnum[pilot.team],
        points: points,
        team: pilot.team
      }

      ranking.push(rankingPosition)
    }
  })

  return ranking
}

export default function Home() {
  const pilotRanking: RankingPosition[] = calcPilotRanking()
  const teamRanking: RankingPosition[] = calcTeamRanking(pilotRanking)

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.body}>
        <Teams />
        <div className={styles.rankings}>
          <Ranking title={"Ranking Escuderias"} ranking={teamRanking} />
          <Ranking title={"Ranking Pilotos"} ranking={pilotRanking} />
        </div>
      </main>
    </div>
  );
}
