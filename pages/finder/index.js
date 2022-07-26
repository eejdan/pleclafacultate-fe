
import { useState } from 'react'
import Select from 'react-select'

import connectMongo from '../../utils/connectMongo'
import FacultyType from '../../models/FacultyType'
import DomainType from '../../models/DomainType'
import University from '../../models/University'
import City from '../../models/City'

import Header from '../../components/Header'
import FinderPicker from '../../components/Finder/FinderPicker'
import FinderFilter from '../../components/Finder/FinderFilter'
import UniversityCard from '../../components/UniversityCard'

import styles from '../../styles/Finder.module.css'

export default function Finder(props) {

    return (
        <div>
            <Header />
            <div className={styles.sortWrapper}><FinderPicker /></div>
            <div className={styles.contentWrapper}>
                <div className={styles.firstColumn}>
                    <FinderFilter 
                        cities={props.cities} 
                        domains={props.domains}
                        facultyTypes={props.facultyTypes}
                    />
                </div>
                <div className={styles.secondColumn}>
                    <div className={styles.resultsBox}>
                        <UniversityCard />
                        <UniversityCard />
                        <UniversityCard />
                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    var container = { props: {}}

    await connectMongo();
    { 
        let cities = await City.find({}).lean().exec();
        
        container.props.cities = cities.map(city => {
            let cityContainer = {
                value: city._id,
                label: city.displayName,
            }
            return JSON.stringify(cityContainer);
        })
    }
    {
        let domains = await DomainType.find({}).lean().exec();
    
        container.props.domains = domains.map(domain => {
            let container = {
                value: domain._id,
                label: domain.displayName,
            }
            return JSON.stringify(container);
        })
    }
    {
        let facultyTypes = await FacultyType.find({}).lean().exec();

        container.props.facultyTypes = facultyTypes.map(fcType => {
            let container = {
                value: fcType._id,
                label: fcType.displayName,
            }
            return JSON.stringify(container);
        })
    }
    {
        let univs = await University.find({}).lean().exec();

        container.props.univs = univs.map(univ => {
            let container = {
                imageurl: univ.imageUrl || 'https://static.vecteezy.com/system/resources/previews/004/851/941/original/university-logo-or-education-logo-concept-illustration-university-logo-design-template-vector.jpg',
                link: univ.shortName,
                motto: univ.motto || 'motto not filled',
            }
        })
    }

    return container;
}