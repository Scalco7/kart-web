export type teams = 'ferrari' | 'mclaren' | 'mercedes' | 'red-bull' | 'peugeot' | 'aston-martin'

export type raceTypes = 'monaco' | 's2' | 'ra-kart' | 'kart-cwb' | 'gt-pinhais' | 'go-kart-park'

export enum teamEnum {
    ferrari = "Ferrari",
    mclaren = 'Mclaren',
    mercedes = 'Mercedes',
    'red-bull' = 'RedBull',
    peugeot = 'Peugeot',
    'aston-martin' = 'Aston Martin',
}

export enum raceEnum {
    monaco = "Mônaco",
    s2 = 'S2',
    'ra-kart' = 'Ra Kart',
    'kart-cwb' = 'Kart Cwb',
    'gt-pinhais' = 'GT Pinhais',
    'go-kart-park' = 'Kartódromo'
}

export interface Racing {
    raceTrack: raceTypes
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