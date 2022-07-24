
import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/universityAdminAuth/index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

let rrIcon = <FontAwesomeIcon icon={faAnglesRight} />

export default function universityAdminLogin() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.loginBox}>
                    <div>Autentificati-va in panoul de administrare al universitatii</div>
                    <form action="/api/universityAdminAuth/login" method="post">
                        <label htmlFor="username">Nume de utilizator:</label>
                        <input type="text" name="username" id="username"></input>
                        <label htmlFor="password">Parola</label>
                        <input type="password" name="password" id="password"></input>
                        <button type="submit">Autentificare</button>
                    </form>
                </div>
                <div className={styles.suggestRegisterBox}>
                    <Link href="/universityAdminAuth/requestRegistration">
                    <div className={styles.baselineText}>Doriti sa va inregistrati universitatea? {rrIcon}</div>
                    </Link>
                </div>
            </div>
        </div>

    )
}