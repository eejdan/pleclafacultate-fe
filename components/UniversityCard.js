import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faLink } from '@fortawesome/free-solid-svg-icons'

import universityCardStyles from '../styles/components/UniversityCard.module.css'

export default function UniversityCard(props) {
    let [currentKey, setCurrentKey] = useState(0);



    var domainsContainer = props.domainsContainer || {
        'arte': ['saiapm'],
        'it': ['it', 'it2']
    }
    const handleOpen = (placeKey) => {
        setCurrentKey(placeKey)
    }

    return (
       <div className={universityCardStyles.wrapper}>
            <div className={universityCardStyles.container}>
                <div className={universityCardStyles.imageHolder}>
                    <img className={universityCardStyles.imageDisplay} src={"https://cdn.vox-cdn.com/thumbor/zvifmyvMRwMLg-h2Q51j3BqqBpE=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22661965/img19.jpg"}></img>
                </div>
                <div className={universityCardStyles.infoContainer}>
                    <div className={universityCardStyles.titleHolder}>
                    <small>Universitatea</small> Alexandru Ioan Cuza</div>
                    <div className={universityCardStyles.locationHolder}>Iasi</div>
                    <div className={universityCardStyles.mottoHolder}>Prosperitate, Ceva, Altceva</div>
                    <div className={universityCardStyles.domainsWrapper}>
                        <div className={universityCardStyles.domainsContainer}>
                            {
                                Object.keys(domainsContainer).map(key => (
                                    <DomainItem 
                                        key={key} 
                                        thiskey={key} 
                                        signal={currentKey} 
                                        handleOpen={handleOpen}
                                        domainTitle={key}
                                        faculties={domainsContainer[key]}
                                        />
                                
                                ))
                            }
                        </div>
                    </div>
                    <div className={universityCardStyles.learnMoreContainer}>
                        <Link href={"/"}>
                            <div className={universityCardStyles.learnMoreButton}>
                                Mai Multe 
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={universityCardStyles.bottomContainer}>
                    <div className={universityCardStyles.linkContainer}>
                        <div>Link extern</div><FontAwesomeIcon icon={faLink} size={"1x"}/>
                    </div>
                    <div className={universityCardStyles.ratingHolder}>
                        <div>4.7</div><FontAwesomeIcon icon={faStar} size={"1x"}/>
                    </div>
                </div>
            </div>
       </div> 
    )
}

function DomainItem(props) {
    const [focused, setFocused] = useState(false);

    const handleClick = () => {
        setFocused(!focused);
        props.handleOpen(props.thiskey);
    }

    useEffect(() => {
        if(props.signal != props.thiskey) setFocused(false);
    }, [props.signal])

    
    return (
        <div className={universityCardStyles.domainItemWrapper}>
            { focused 
            ? <DomainPopup
                faculties={props.faculties}
             /> 
            : '' }
            <div
                className={universityCardStyles.domainItem}
                onClick={handleClick}>{props.domainTitle}
            </div>
        </div>
    )
}
function DomainPopup(props) {
    return (
        <div className={universityCardStyles.domainPopupWrapper}>
            <div className={universityCardStyles.domainPopupContainer}>
                <div className={universityCardStyles.domainPopupHeader}>Facultati</div>
                <div className={universityCardStyles.domainPopupFacultiesContainer}>
                    { props.faculties.map(fcType => (<DomainPopupFacultyItem key={fcType} title={fcType} />) )}
                </div>
            </div>
        </div>
    )
}
function DomainPopupFacultyItem(props) {

    return (
        <React.Fragment>
            <div className={universityCardStyles.domainPopupFacultyItem}>
                {props.title}
            </div>
        </React.Fragment>
    )
}