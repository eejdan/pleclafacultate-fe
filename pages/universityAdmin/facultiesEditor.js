
import styles from '../../styles/universityAdmin/FacultiesEditor.module.css'
import Layout from './Layout'
import sessionMiddleware from '../../lib/sessionMiddleware'

export default function FacultiesEditor() {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
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

    return {
        props: {
            sid: sessionContainer.currentSid
        }
    };

}