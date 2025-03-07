import styles from "./ranking.module.css"
import RankingBox from "@/components/atoms/ranking_box/ranking_box"
import { RankingPosition } from "@/utils/interfaces"

interface RankingProps {
    title: string
    participants: RankingPosition[]
}

export default function Ranking({ title, participants }: RankingProps) {
    participants = participants.sort((a, b) => b.points - a.points)

    return <main className={styles.main}>
        <p className={styles.title}>{title}</p>
        <div className={styles.boxRanking}>
            {participants.map((p, i) => <RankingBox
                key={`participant-${i}`}
                position={i + 1}
                name={p.name}
                points={p.points} />
            )}
        </div>
    </main>
}