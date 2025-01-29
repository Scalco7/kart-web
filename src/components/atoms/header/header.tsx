import styles from "./header.module.css";

export default function Header(){
    return <main className={styles.main}>
        <img className={styles.img} src="kart-logo.png"/>
    </main>
}