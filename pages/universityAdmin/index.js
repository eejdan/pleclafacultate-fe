import React, { useState } from 'react'

import sessionMiddleware from '../../lib/sessionMiddleware'
import Layout from './Layout'

import styles from '../../styles/universityAdmin/index.module.css'

export default function UniversityAdmin() {

    return (
        <Layout>
            <div className='index'></div>
            Bun venit in panoul de administrare al universitatii.
            Poti incepe prin personalizarea cardului de afisare.
        </Layout>
    )
}
export async function getServerSideProps(context) {

    // console.log(sessionContainer);
    let sessionContainer = await sessionMiddleware(context)
    if (sessionContainer.currentSession.univ == false) {
        return {
            redirect: {
                destination: '/universityAdminAuth',
                permanent: false
            }
        }
    }

    return {
        props: {
            sid: sessionContainer.currentSid
        }
    };

}