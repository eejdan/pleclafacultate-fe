import React from "react";
import Select from 'react-select'

import connectMongo from '../utils/connectMongo'
import City from '../models/City'
import FacultyType from '../models/FacultyType'
import DomainType from '../models/DomainType'

import cardStyles from '../styles/components/CardStyles.module.css'
import finderFilterStyles from  '../styles/components/Finder/FinderFilter.module.css'

export default function Testing(props) {

    console.log(props)
    return (
        <React.Fragment>
            <div>Testing Area</div>
            {/* <div className={cardStyles.cardsHolder}>
                <UnivCard />
                <UnivCard />
                <UnivCard />
            </div> */}
            <FinderFilter 
                cities={props.cities} 
                domains={props.domains}
                facultyTypes={props.facultyTypes}
            />
        </React.Fragment>
    )
}


function FinderFilter(props) {
    var cityOptions, domainOptions, facultyOptions;


    if(props.cities) cityOptions = props.cities.map(city => JSON.parse(city));
    if(props.domains) domainOptions = props.domains.map(domain => JSON.parse(domain));
    if(props.facultyTypes) facultyOptions = props.facultyTypes.map(fcType => JSON.parse(fcType));
    /* cityOptions = [ { value: 'any', label: 'Oriunde' }  ,...cityOptions] */

    return (
    <div className={finderFilterStyles.wrapper}>
        {props.cities ? <FilterItem
            title={"Locatie"}
            titleSmall={"(oricare dintre)"}>
            <Select options={cityOptions}
                isMulti={true}
                placeholder={"Oriunde"}
                styles={{
                    placeholder: (provided, state) => ({
                        ...provided,
                        color: '#caccd1'
                    })
                }}
            />
        </FilterItem> : '' }
        {props.domains ? <FilterItem
            title={"Domeniu"}
            titleSmall={"(oricare dintre)"}>
            <Select options={domainOptions}
                isMulti={true}
                placeholder={"Oricare"}
                styles={{
                    placeholder: (provided, state) => ({
                        ...provided,
                        color: '#caccd1'
                    })
                }}
            />
        </FilterItem> : '' }
        {props.facultyTypes ? <FilterItem
            title={"Facultate"}
            titleSmall={"(oricare dintre)"}>
            <Select options={facultyOptions}
                isMulti={true}
                placeholder={"Oricare"}
                styles={{
                    placeholder: (provided, state) => ({
                        ...provided,
                        color: '#caccd1'
                    })
                }}
            />
        </FilterItem> : '' }
    </div>)
}

function FilterItem(props) {
    return(
        <div className={finderFilterStyles.filterItem}>
        <div className={finderFilterStyles.itemHeader}>
            {props.title}{props.titleSmall ? <small>{props.titleSmall}</small> : ''}
        </div>
        <div className={finderFilterStyles.itemSelect}>
            {props.children}
        </div>
    </div>
    )
}

/* function UnivCard(props) {


    return (
        <div className={cardStyles.wrapper}>
            <div className={cardStyles.container}>
                <div className={cardStyles.imageContainer}></div>
                <div className={cardStyles.InfoContainer}>
                    <div className={cardStyles.univTitle}>
                        <small>Universitatea</small> Alexandru Ioan Cuza
                    </div>
                    <div className={cardStyles.univLoc}>
                        Iasi, Iasi
                    </div>
                    <div className={cardStyles.motto}>Ceva ceva si altceva</div>     
                </div>
                <div className={cardStyles.domainsContainer}>
                    <DomainItem /> 
                    <DomainItem /> 
                    <DomainItem /> 
                    <DomainItem /> 
                    <DomainItem /> 
                </div>
                <div className={cardStyles.ratingContainer}></div>
            </div>
        </div>
    )
}
function DomainItem(props) {
    return (
        <div className={cardStyles.domainItem}>
            <div className={cardStyles.domainTitle}>
                Științe Economice
            </div>
            <div className={cardStyles.domainPopup}>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
            </div>
        </div>
    )
}
function FacultyItem(props) {
    return (
        <React.Fragment>
            <div className={cardStyles.FacultyItem}>
                
            </div>
        </React.Fragment>
    )
} */

export async function getServerSideProps(context) {
    var container = { props: {} };

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
    return container; 
}