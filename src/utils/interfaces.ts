export type teams = 'ferrari' | 'mclaren' | 'mercedes' | 'red-bull' | 'peugeot' | 'aston-martin'

export enum teamEnum {
    ferrari = "Ferrari",
    mclaren = 'Mclaren',
    mercedes = 'Mercedes',
    'red-bull' = 'RedBull',
    peugeot = 'Peugeot',
    'aston-martin' = 'Aston Martin',
}

export interface Racing {
    raceTrack: string
    participants: RacingParticipant[]
}

export interface RacingParticipant {
    name: string
    position: number
}

export interface Participant {
    name: string
    team: teams
}

export interface RankingPosition {
    name: string
    points: number
    team: teams
}