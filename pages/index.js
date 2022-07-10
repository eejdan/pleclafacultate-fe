import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import TitleLogo from '../components/TitleLogo'
import React, { useState } from 'react'

import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <FirstSection />
      </div>
    </div>
  )
}

function FirstSection() {


  const [isSearching, setIsSearching] = useState(false);

  const [citiesSearchState, setCitiesSearchState] = useState('');
  const [universitiesSearchState, setUniversitiesSearchState] = useState('');
  const [facultiesSearchState, setFacultiesSearchState] = useState('');

  const srpCircleClasses = {
    'ready': ' srpCircleReady',
    'waiting': ' srpCircleWaiting',
    'busy': ' srpCircleBusy'
  }
  const searchStateCircleResolver = (stateValue, setter) => {
    if(!srpCircleClasses[stateValue]) return;
    setter(srpCircleClasses[stateValue]);
  }
  let searchTimeout;
  const handleSearching = (e) => {
    setIsSearching(!!(e.target.value))
    searchStateCircleResolver('waiting', setCitiesSearchState)
    searchStateCircleResolver('waiting', setUniversitiesSearchState)
    searchStateCircleResolver('waiting', setFacultiesSearchState)
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchStateCircleResolver('busy', setCitiesSearchState)
      searchStateCircleResolver('busy', setUniversitiesSearchState)
      searchStateCircleResolver('ready', setFacultiesSearchState)
    }, 5000)
  }

  return (
    <section className={`${styles.contentSection} ${styles.firstSection}`}>
      <div 
        style={{ height: isSearching ? '300px' : '75px' }} 
        className={`${styles.searchBox} ${isSearching ? 'srpActive' : '' }`}
      >
        <div className={`${styles.sbiWrapper} ${isSearching ? 'sbiSearching' : ''}`}>
          <input
            onChange={handleSearching}
            className={`${styles.searchBoxInput}`} placeholder={"Universitatea..  "}
          />
        </div>
        <div className={styles.searchResultsPreviewItem}>
          <div className={styles.srpHeader}>
            <div className={`${styles.srpCircle} ${citiesSearchState}`}></div>
            <div>Orase</div>
          </div>
          <div className={styles.srpResult}>

          </div>
        </div>
        <div className={styles.searchResultsPreviewItem}>
          <div className={styles.srpHeader}>
          <div className={`${styles.srpCircle} ${universitiesSearchState}`}></div>
            <div>Universitati</div>
          </div>
        </div>
        <div className={styles.searchResultsPreviewItem}>
          <div className={styles.srpHeader}>
          <div className={`${styles.srpCircle} ${facultiesSearchState}`}></div>
            <div>Facultati</div>
          </div>
        </div>
      </div>
    </section>
  )



}