

import Layout from './Layout'
import sessionMiddleware from '../../lib/sessionMiddleware'

import styles from '../../styles/universityAdmin/InfoEditor.module.css'

export default function InfoEditor() {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.infoGrid}>
                        <div>test</div>
                        <div><input></input></div>
                        <div>test</div>
                        <div><input></input></div>
                        <div>test</div>
                        <div><input></input></div>
                        <div>test</div>
                        <div><input></input></div>
                        <div>test</div>
                        <div><input></input></div>
                    </div>
                    <button>Salveaza</button>
                </div>
            </div>
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