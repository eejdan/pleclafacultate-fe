

import Layout from './Layout'

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