
import styles from '../../styles/components/FinderPicker.module.css'

export default function FinderPicker(props) {
    return (
        <div className={styles.wrapper}>
            <div 
                className={styles.navItem}
                tabIndex={0}>
                <div className={styles.tabText}>Universitati</div>
                <div className={styles.spanner}></div>
            </div>
            <div 
                className={styles.navItem}
                tabIndex={1}>
                <div className={styles.tabText}>Facultati</div>
                <div className={styles.spanner}></div>
            </div>
            <div
                className={styles.navItem}
                tabIndex={2}>
                <div className={styles.tabText}>Orase</div>
                <div className={styles.spanner}></div>
            </div>
        </div>
    )
}