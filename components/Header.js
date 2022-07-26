

import React from "react";

import TitleLogo from './TitleLogo'
 
import styles from "../styles/components/Header.module.css"

export default function Header(props) {
    return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <div>{ props.children}</div>
            <div style={{ fontSize: '70px' }}>
                <TitleLogo />
            </div>
            <div><button onClick={() => { document.location = '/universityAdminAuth' }}>Administrare Universitara</button></div>
        </div>
        <div className={`${styles.underbar}`}>
            <div className={styles.first}></div>
            <div className={styles.second}></div>
            <div className={styles.third}></div>
            <div className={styles.fourth}></div>
            <div className={styles.fifth}></div>
        </div>
    </div>
    )
}