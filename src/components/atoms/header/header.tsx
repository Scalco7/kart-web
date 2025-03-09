import { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
    const [showNavigationBox, setShowNavigationBox] = useState(false)

    function toogleShowNavigationBox(){
        setShowNavigationBox(!showNavigationBox)
    }

    return <main className={styles.main}>
        <img className={styles.hamburguerIcon} src="icons/hamburguer_icon.png" onClick={() => toogleShowNavigationBox()}/>
        <div className={`${styles.navigationBox} ${showNavigationBox ? styles.visible : styles.hidden}`}>
            <Link href="/" className={styles.navigationText}>Home</Link>
            <div className={styles.line}></div>
            <Link href="/races" className={styles.navigationText}>Corridas</Link>
        </div>
        <nav className={styles.navigationBar}>
            <Link href="/" className={styles.navigationText}>Home</Link>
            <Link href="/races" className={styles.navigationText}>Corridas</Link>
        </nav>
        <img className={styles.img} src="kart-logo.png" />
    </main>
}