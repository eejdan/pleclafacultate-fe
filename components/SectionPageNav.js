
import styles from '../styles/components/SectionPageNav.module.css'

export default function SectionPageNav(props) {



    return (
        <div className={styles.wrapper}>
            <div 
                className={styles.navItem}
                tabIndex={0}>
                <div className={styles.tabText}>Start</div>
                <div className={styles.spanner}></div>
            </div>
            <div 
                className={styles.navItem}
                tabIndex={1}>
                <div className={styles.tabText}>Navigare</div>
                <div className={styles.spanner}></div>
            </div>
            <div
                className={styles.navItem}
                tabIndex={2}>
                <div className={styles.tabText}>Ceva</div>
                <div className={styles.spanner}></div>
            </div>
            <div
                className={styles.navItem}
                tabIndex={3}>
                <div className={styles.tabText}>Altceva</div>
                <div className={styles.spanner}></div>
            </div>
            <div 
                className={styles.navItem}
                tabIndex={4}>
                <div className={styles.tabText}>End</div>
                <div className={styles.spanner}></div>
            </div>
        </div>
    )
}
export async function getServerSideProps(context) {
    return {}
}