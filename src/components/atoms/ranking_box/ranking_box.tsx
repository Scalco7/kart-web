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
        <img src={`team-cars/${team}.png`} style={{
            position: 'absolute',
            width: 40,
            left: `${gradientPercentage + gradientSpread - 10}%`,
            objectFit: 'contain',
            zIndex: 0,
            opacity: 0.9,
        }} />
        <p style={{ color: '#fff', zIndex: 1 }}>
            {position}º
        </p>
        <p style={{ color: gradientPercentage + gradientSpread > 50 ? '#fff' : '#000', zIndex: 1 }}>
            {name}
        </p>
        <p style={{ color: '#000', zIndex: 1 }}>
            {points}pts
        </p>
    </main>
}