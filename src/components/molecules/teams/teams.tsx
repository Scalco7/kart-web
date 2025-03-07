import TeamPresentation from '@/components/atoms/team_presentation/team_presentation'
import styles from './teams.module.css'
import { useState } from 'react'
import { teams } from '@/utils/interfaces'
import { teamColors } from '@/utils/consts'

interface TeamData {
    color: string
    imgPath: string
}

const teamMap: Record<teams, TeamData> = {
    ferrari: { color: teamColors.ferrari, imgPath: '/team-logo/ferrari.png' },
    'red-bull': { color: teamColors['red-bull'], imgPath: '/team-logo/red-bull.png' },
    mclaren: { color: teamColors.mclaren, imgPath: '/team-logo/mclaren.png' },
    mercedes: { color: teamColors.mercedes, imgPath: '/team-logo/mercedes.png' },
    peugeot: { color: teamColors.peugeot, imgPath: '/team-logo/peugeot.png' },
    'aston-martin': { color: teamColors['aston-martin'], imgPath: '/team-logo/aston-martin.png' },
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