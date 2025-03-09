'use client'

import Header from "@/components/atoms/header/header";
import styles from "./page.module.css";
import { races } from "@/utils/consts";
import { raceEnum, Racing, RankingPosition } from "@/utils/interfaces";
import { useState } from "react";
import Ranking from "@/components/molecules/ranking/ranking";
import { calcPilotRanking } from "@/utils/pilotRanking";

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
                    ? <Ranking title={"Posições"} participants={calcPilotRanking([raceSelected])} />
                    : <div>
                        <p>Esta corrida ainda vai acontecer...</p>
                        <p>Quem será o vencedor???</p>
                    </div>
                }
            </div>
        </main>
    </div>
}