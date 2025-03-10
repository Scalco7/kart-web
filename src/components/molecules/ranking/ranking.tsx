import styles from "./ranking.module.css"
import RankingBox from "@/components/atoms/ranking_box/ranking_box"
import { RankingPosition } from "@/utils/interfaces"

interface RankingProps {
    title: string
    ranking: RankingPosition[]
}

function calcGradientPercentage(maxPoint: number, pilotPoint: number): number {
    return (pilotPoint * 40 / maxPoint) + 10
}

function calcGradienSpread(maxPoint: number, pilotPoint: number): number {
    return (pilotPoint * 20 / maxPoint) + 10
}

export default function Ranking({ title, ranking }: RankingProps) {
    ranking = ranking.sort((a, b) => b.points - a.points)
    const maxPoint = ranking[0].points

    return <main className={styles.main}>
        <p className={styles.title}>{title}</p>
        <div className={styles.boxRanking}>
            {ranking.map((p, i) => <RankingBox
                key={`participant-${i}`}
                position={i + 1}
                name={p.name}
                points={p.points}
                team={p.team}
                gradientPercentage={calcGradientPercentage(maxPoint, p.points)}
                gradientSpread={calcGradienSpread(maxPoint, p.points)}
            />
            )}
        </div>
    </main>
}