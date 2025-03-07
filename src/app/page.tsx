'use client'

import Header from "@/components/atoms/header/header";
import styles from "./page.module.css";
import Ranking from "@/components/molecules/ranking/ranking";
import { Participant, Racing, RankingPosition } from "@/utils/interfaces";
import Teams from "@/components/molecules/teams/teams";

const pilots: Participant[] = [
  { name: 'Tiago', team: 'Mercedes' },
  { name: 'Cadu', team: 'Ferrari' },
  { name: 'Johnatan', team: 'Peugeot' },
  { name: 'Nicholas', team: 'Peugeot' },
  { name: 'G. Klisman', team: 'RedBull' },
  { name: 'G. Scalco', team: 'Ferrari' },
  { name: 'Sandro', team: 'Aston Martin' },
  { name: 'G. Pessi', team: 'Mclaren' },
  { name: 'F. Scalco', team: 'RedBull' },
  { name: 'Murilo', team: 'Mclaren' },
  { name: 'Henrique', team: 'Aston Martin' },
  { name: 'Matheus', team: 'Mercedes' },
]

const racings: Racing[] = [
  {
    raceTrack: 'Monaco',
    participants: [
      { name: 'Tiago', position: 6 },
      { name: 'Cadu', position: 10 },
      { name: 'Johnatan', position: 12 },
      { name: 'Nicholas', position: 1 },
      { name: 'G. Klisman', position: 7 },
      { name: 'G. Scalco', position: 8 },
      { name: 'Sandro', position: 9 },
      { name: 'G. Pessi', position: 4 },
      { name: 'F. Scalco', position: 5 },
      { name: 'Murilo', position: 3 },
      { name: 'Henrique', position: 2 },
      { name: 'Matheus', position: 11 }
    ]
  },
  {
    raceTrack: 'S2 Kart',
    participants: [
      { name: 'Tiago', position: 5 },
      { name: 'Cadu', position: 8 },
      { name: 'Johnatan', position: 1 },
      { name: 'Nicholas', position: 4 },
      { name: 'G. Klisman', position: 6 },
      { name: 'G. Scalco', position: 10 },
      { name: 'Sandro', position: 11 },
      { name: 'G. Pessi', position: 9 },
      { name: 'F. Scalco', position: 7 },
      { name: 'Murilo', position: 3 },
      { name: 'Henrique', position: 2 },
      { name: 'Matheus', position: 12 }
    ]
  }
]

function calcPilotRanking(): RankingPosition[] {
  const ranking: RankingPosition[] = pilots.map(p => ({ name: p.name, points: 0 }))

  racings.forEach(racing => {
    racing.participants.forEach(participant => {
      let participantPoints = 0
      if (participant.position == 1) {
        participantPoints = 7
      }
      else if (participant.position <= 6) {
        participantPoints = 7 - participant.position
      }

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

    let rankingPosition: RankingPosition | undefined = ranking.find(rp => rp.name == pilot.team)

    if (rankingPosition) {
      rankingPosition.points += points
    }
    else {
      rankingPosition = {
        name: pilot.team,
        points: points
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
          <Ranking title={"Ranking Escuderias"} participants={teamRanking} />
          <Ranking title={"Ranking Pilotos"} participants={pilotRanking} />
        </div>
      </main>
    </div>
  );
}
