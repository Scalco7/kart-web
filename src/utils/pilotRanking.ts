import { pilots } from "./consts"
import { Racing, RankingPosition } from "./interfaces"

export function calcPilotRanking(races: Racing[]): RankingPosition[] {
  const ranking: RankingPosition[] = pilots.map(p => ({ name: p.name, points: 0, team: p.team }))

  races.forEach(racing => {
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