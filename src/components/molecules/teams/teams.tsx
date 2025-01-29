import TeamPresentation from '@/components/atoms/team_presentation/team_presentation'
import styles from './teams.module.css'

type teams = 'ferrari' | 'mclaren' | 'mercedes' | 'red-bull' | 'peugeot' | 'aston-martin'

export default function Teams() {
    function handleOnClickTeam(team: teams) {
        console.log(team)
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
            <TeamPresentation color="#121F45" imgPath="/team-logo/red-bull.png" />
        </div>
    </main>
}