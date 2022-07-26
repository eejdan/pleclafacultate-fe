import React, { useRef } from 'react'

import sessionMiddleware from '../../lib/sessionMiddleware'
import connectMongo from '../../utils/connectMongo'
import University from '../../'

import Layout from './Layout'
import EditorContainer from '../../components/EditorContainer'

import styles from '../../styles/universityAdmin/MainpageEditor.module.css'

export default function MainpageEditor(props) {

    console.log(props.sid);

    const handleSave = () => {
        fetch('/api/universityAdmin/', {

        })
    }

    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div>Aici puteti edita pagina principala a spatiului virtual al universitatii</div>
                        <div>
                            TBD
                        </div>
                    </div>
                    <EditorContainer />
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    // console.log(sessionContainer);
    let sessionContainer = sessionMiddleware(context)
    if (sessionContainer.currentSession.univ == false) {
        return {
            redirect: {
                destination: '/universityAdminAuth',
                permanent: false
            }
        }
    }

    await connectMongo();


    return {
        props: {
            sid: sessionContainer.currentSid
        }
    };

}
