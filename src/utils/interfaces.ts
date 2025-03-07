export interface Racing{
    raceTrack: string
    participants: RacingParticipant[]
}

export interface RacingParticipant {
    name: string
    position: number
}

export interface Participant {
    name: string
    team: string
}

export interface RankingPosition {
    name: string
    points: number
}