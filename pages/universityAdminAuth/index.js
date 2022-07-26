
import React, { useState } from 'react'
import Cookies from 'universal-cookie'

import Link from 'next/link'
import styles from '../../styles/universityAdminAuth/index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

let rrIcon = <FontAwesomeIcon icon={faAnglesRight} />

export default function UniversityAdminLogin() {
    const cookies = new Cookies();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => { 
        e.preventDefault();
        fetch('/api/universityAdminAuth/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username, password: password
            })
        }).then(resp => resp.json()).then( data => {
            if(data.error) return window.location.reload();
            else {
                cookies.set('sid', data.sid, { path: '/' });
                window.location = '/universityAdmin/'
            }
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.loginBox}>
                    <div>Autentificati-va in panoul de administrare al universitatii</div>
                    <form action="/api/universityAdminAuth/login" method="post"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="username">Nume de utilizator:</label>
                        <input type="text" name="username" id="username"
                            onChange={e => setUsername(e.target.value)}></input>
                        <label htmlFor="password">Parola</label>
                        <input type="password" name="password" id="password"
                            onChange={e => setPassword(e.target.value)}></input>
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