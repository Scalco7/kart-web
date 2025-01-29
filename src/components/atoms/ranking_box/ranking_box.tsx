interface RankingBoxProps{
    position: number
    name: string
    points: number
}

export default function RankingBox({position, name, points}: RankingBoxProps){
    return <main style={{
        display: 'flex',
        width: '100%',
        height: '30px',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#D9D9D9',
        color: '#000000',
        fontSize: '18px',
        fontWeight: '600',
        borderRadius: '50px',
        padding: '0px 20px'
    }}>
        <p>
            {position}º
        </p>
        <p>
            {name}
        </p>
        <p>
            {points}pts
        </p>
    </main>
}