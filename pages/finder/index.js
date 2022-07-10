
import { useState } from 'react'

import Header from '../../components/Header'
import FinderPicker from '../../components/FinderPicker'

import styles from '../../styles/Finder.module.css'

export default function Finder() {

    const [queryTarget, setQueryTarget] = useState('univ');

    const changeQueryTarget = () => {

    }

    return (
        <div>
            <Header />
            <div className={styles.contentWrapper}>
                <div className={styles.firstColumn}>
                    <UnivFilterBox />
                </div>
                <div className={styles.secondColumn}>
                    <div className={styles.sortBox}>
                        <FinderPicker />
                    </div>
                    <div className={styles.resultsBox}>
                        a
                    </div>
                </div>
            </div>
        </div>
    )
}

function UnivFilterBox() {
    return (
        <div className={styles.filterBox}>
            <div className={styles.filterItem}>
                <div className={styles.filterItemHeader}>
                    
                </div>
            </div>
        </div>
    )
}

function ResultItem() {

    return (
        <div>ab</div>
    )
}