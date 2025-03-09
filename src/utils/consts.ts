import { Participant, Racing, teams } from "./interfaces";

export const teamColors: Record<teams, string> = {
  ferrari: '#E41C1F',
  'red-bull': '#121F45',
  mclaren: '#FF8000',
  mercedes: '#03BFB5',
  peugeot: '#000000',
  'aston-martin': '#00594F',
}

export const races: Racing[] = [
  {
    raceTrack: 'monaco',
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
    raceTrack: 's2',
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
  },
  {
    raceTrack: 'ra-kart',
    participants: []
  },
  {
    raceTrack: 'kart-cwb',
    participants: []
  },
  {
    raceTrack: 'gt-pinhais',
    participants: []
  },
  {
    raceTrack: 'go-kart-park',
    participants: []
  }
]

export const pilots: Participant[] = [
  { name: 'Tiago', team: 'mercedes' },
  { name: 'Cadu', team: 'ferrari' },
  { name: 'Johnatan', team: 'peugeot' },
  { name: 'Nicholas', team: 'peugeot' },
  { name: 'G. Klisman', team: 'red-bull' },
  { name: 'G. Scalco', team: 'ferrari' },
  { name: 'Sandro', team: 'aston-martin' },
  { name: 'G. Pessi', team: 'mclaren' },
  { name: 'F. Scalco', team: 'red-bull' },
  { name: 'Murilo', team: 'mclaren' },
  { name: 'Henrique', team: 'aston-martin' },
  { name: 'Matheus', team: 'mercedes' },
]