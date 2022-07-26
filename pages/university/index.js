
import { useState, } from 'react'
import Header from '../../components/Header'
import SectionPageNav from '../../components/SectionPageNav'
import ReviewsBar from '../../components/ReviewsBar'

import styles from '../../styles/University.module.css'

export default function UniversityPage(props) {
    const left = <button onClick={() => window.location = '/finder'}>Inapoi</button>

    return (
        <div className={styles.univDummyRoot}>
            <Header left={left}>{left}</Header>
            <div className={styles.imageWrapper} style={{ 
                background: `url("${props.imageurl || "https://static.vecteezy.com/system/resources/previews/004/851/941/original/university-logo-or-education-logo-concept-illustration-university-logo-design-template-vector.jpg"}") no-repeat center`}}>

            </div>
            <div className={styles.contentWrapper}>
            <div className={styles.contentContainer}>
                <p dangerouslySetInnerHTML={{__html: props.content}} />
            </div>
            </div>
        </div>
    )
}
/* 
export function getServerSideProps(context) {
    return { redirect: { 
        permanent: false, destination: '/finder'} }
} */