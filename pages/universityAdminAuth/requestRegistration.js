
import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/universityAdminAuth/index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

let rrIcon = <FontAwesomeIcon icon={faAnglesLeft} />

export default function RequestRegistration() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.loginBox}>
                    <div>Creati o cerere de inregistrare pentru universitatea dumneavoastra</div>
                    <small>Va rugam sa informati secretariatul universitatii dumneavoastra inainte de a crea cererea. </small>
                    <small>Vom contacta universitatea pentru a valida cererea.</small>
                    <form action="/api/universityAdminAuth/request" method="post">
                        <label htmlFor="uniname">Numele universitatii<small>(inclusiv orasul)</small></label>
                        <input type="text" name="uniname" id="uniname"></input>
                        <label htmlFor="repname">Numele dumneavoastra</label>
                        <input type="text" name="repname" id="repname"></input>
                        <label htmlFor="email">Email-ul dumneavoastra</label>
                        <input type="text" name="email" id="email"></input>
                        <label htmlFor="message">Mesaj<small>(optional)</small></label>
                        <textarea className={styles.messagetextarea} type="textarea" name="message" id="message"></textarea>


                        <button type="submit">Trimite</button>
                    </form>
                </div>
                <div className={styles.suggestRegisterBox}>
                    <Link href="/universityAdminAuth/">
                    <div className={styles.baselineText}>Inapoi {rrIcon}</div>
                    </Link>
                </div>
            </div>
        </div>

    )
}