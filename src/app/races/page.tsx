'use client'

import Header from "@/components/atoms/header/header";
import styles from "./page.module.css";
import { pilots, races } from "@/utils/consts";
import { raceEnum, Racing, RankingPosition } from "@/utils/interfaces";
import { useState } from "react";
import Ranking from "@/components/molecules/ranking/ranking";
import { getPointsByPosition } from "@/utils/pilotRanking";

function calcRanking(race: Racing): RankingPosition[] {
    race.participants.sort((a, b) => a.position - b.position)
    const ranking: RankingPosition[] =[]

    race.participants.forEach(participant => {
        const position: RankingPosition = {
            name: participant.name,
            points: getPointsByPosition(participant.position),
            team: pilots.find(p => p.name == participant.name)!.team
        }

        ranking.push(position)
    })

    return ranking
}

export default function Races() {
    const [raceSelected, setRaceSelected] = useState(races[0])

    function changeRaceSelected(race: Racing) {
        setRaceSelected(race)
    }

    return <div className={styles.page}>
        <Header />
        <main className={styles.body}>
            <div className={styles.headerBox}>
                {races.map(race => (
                    <p className={`${styles.raceHeaderText} ${raceSelected == race ? styles.raceSelected : ''}`}
                        onClick={() => changeRaceSelected(race)}
                        key={`race-name-header-${race.raceTrack}`}
                    >
                        {raceEnum[race.raceTrack]}
                    </p>
                ))}
            </div>
            <div className={styles.showRaceBox}>
                <p className={styles.selectedRaceTitle}>{raceEnum[raceSelected.raceTrack]}</p>
                {raceSelected.participants.length > 0
                    ? <Ranking title={"Posições"} ranking={calcRanking(raceSelected)} />
                    : <div>
                        <p>Esta corrida ainda vai acontecer...</p>
                        <p>Quem será o vencedor???</p>
                    </div>
                }
            </div>
        </main>
    </div>
}