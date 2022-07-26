
import { useState } from 'react'
import Header from '../../components/Header'
import SectionPageNav from '../../components/SectionPageNav'
import ReviewsBar from '../../components/ReviewsBar'

import styles from '../../styles/University.module.css'

export default function University(props) {

    const [navItems, setNavItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(null); 

    const changeTab = (tabId) => {
        

    }
    return (
        <div className={styles.univDummyRoot}>
            <Header />
{/*             <SectionPageNav setTab={changeTab}/>
 */}{/*             {currentItem ? currentItem : navItems[1].tabContent }
 */}            <ReviewsBar /> {/* DO THIS BEFORE SWITCHER */}
        </div>
    )
}