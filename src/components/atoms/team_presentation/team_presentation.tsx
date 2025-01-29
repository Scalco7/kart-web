import styles from './team_presentation.module.css'

interface TeamPresentationProps{
    color: string
    imgPath: string
}

export default function TeamPresentation({color, imgPath}: TeamPresentationProps){
    return <main className={styles.main}>
        <div className={styles.blurBox} style={{background: color}}></div>
        <img className={styles.img} src={imgPath}/>
    </main>
}