export function getPointsByPosition(position: number): number {
  let participantPoints = 0
  if (position == 1) {
    participantPoints = 7
  }
  else if (position <= 6) {
    participantPoints = 7 - position
  }

  return participantPoints
}