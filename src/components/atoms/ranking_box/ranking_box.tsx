import { teamColors } from "@/utils/consts"
import { teams } from "@/utils/interfaces"

interface RankingBoxProps {
    position: number
    name: string
    points: number
    team: teams
    gradientPercentage: number
    gradientSpread: number
}

export default function RankingBox({ position, name, points, team, gradientPercentage, gradientSpread }: RankingBoxProps) {
    return <main style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        width: '100%',
        height: '30px',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: `linear-gradient(90deg, 
        ${teamColors[team]} 0%, 
        ${teamColors[team]} ${gradientPercentage}%, 
        #D9D9D9  ${gradientPercentage + gradientSpread}%, 
        #D9D9D9 100%)`,
        fontSize: '18px',
        fontWeight: '600',
        borderRadius: '50px',
        padding: '0px 20px'
    }}>
        <p style={{color: '#fff'}}>
            {position}º
        </p>
        <p style={{color: gradientPercentage + gradientSpread > 50 ? '#fff' : '#000'}}>
            {name}
        </p>
        <p style={{color: '#000'}}>
            {points}pts
        </p>
    </main>
}