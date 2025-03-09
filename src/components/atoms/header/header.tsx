import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
    const [showNavigationBox, setShowNavigationBox] = useState(false)

    function toogleShowNavigationBox(){
        setShowNavigationBox(!showNavigationBox)
    }

    return <main className={styles.main}>
        <img className={styles.hamburguerIcon} src="icons/hamburguer_icon.png" onClick={() => toogleShowNavigationBox()}/>
        <div className={`${styles.navigationBox} ${showNavigationBox ? styles.visible : styles.hidden}`}>
            <a href="/" className={styles.navigationText}>Home</a>
            <div className={styles.line}></div>
            <a href="/races" className={styles.navigationText}>Corridas</a>
        </div>
        <nav className={styles.navigationBar}>
            <a href="/" className={styles.navigationText}>Home</a>
            <a href="/races" className={styles.navigationText}>Corridas</a>
        </nav>
        <img className={styles.img} src="kart-logo.png" />
    </main>
}