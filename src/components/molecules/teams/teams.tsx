import TeamPresentation from '@/components/atoms/team_presentation/team_presentation'
import styles from './teams.module.css'
import { useState } from 'react'

type teams = 'ferrari' | 'mclaren' | 'mercedes' | 'red-bull' | 'peugeot' | 'aston-martin'

interface TeamData {
    color: string
    imgPath: string
}

const teamMap: Record<teams, TeamData> = {
    ferrari: { color: '#E41C1F', imgPath: '/team-logo/ferrari.png' },
    'red-bull': { color: '#121F45', imgPath: '/team-logo/red-bull.png' },
    mclaren: { color: '#FF8000', imgPath: '/team-logo/mclaren.png' },
    mercedes: { color: '#03BFB5', imgPath: '/team-logo/mercedes.png' },
    peugeot: { color: '#000000', imgPath: '/team-logo/peugeot.png' },
    'aston-martin': { color: '#00594F', imgPath: '/team-logo/aston-martin.png' },
}

export default function Teams() {
    const [team, setTeam] = useState<TeamData>(teamMap['ferrari'])

    function handleOnClickTeam(teamName: teams) {
        setTeam(teamMap[teamName])
    }

    return <main className={styles.main}>
        <div className={styles.teamsBox}>
            <img className={styles.logo} src='/team-logo/ferrari.png'
                onClick={() => handleOnClickTeam('ferrari')}
            />
            <img className={styles.logo} src='/team-logo/mclaren-alt.png'
                onClick={() => handleOnClickTeam('mclaren')}
            />
            <img className={styles.logo} src='/team-logo/mercedes.png'
                onClick={() => handleOnClickTeam('mercedes')}
            />
            <img className={styles.logo} src='/team-logo/red-bull.png'
                onClick={() => handleOnClickTeam('red-bull')}
            />
            <img className={styles.logo} src='/team-logo/peugeot.png'
                onClick={() => handleOnClickTeam('peugeot')}
            />
            <img className={styles.logo} src='/team-logo/aston-martin.png'
                onClick={() => handleOnClickTeam('aston-martin')}
            />
        </div>
        <div className={styles.carousel}>
            {team && <TeamPresentation color={team.color} imgPath={team.imgPath} />}
        </div>
    </main>
}