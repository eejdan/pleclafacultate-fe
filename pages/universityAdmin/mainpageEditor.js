import React, { useRef } from 'react'

import getSession from '../../lib/get-session'

import Layout from './Layout'
import EditorContainer from '../../components/EditorContainer'

import styles from '../../styles/universityAdmin/MainpageEditor.module.css'

export default function MainpageEditor() {


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


export async function getServerSideProps({req, res}) {
    const session = await getSession(req, res);
    return { props: {} };
}
