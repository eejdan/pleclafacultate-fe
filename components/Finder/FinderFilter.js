
import React from 'react';
import Select from 'react-select';

import finderFilterStyles from '../../styles/components/Finder/FinderFilter.module.css'

export default function FinderFilter(props) {
    var cityOptions, domainOptions, facultyOptions;
    console.log(props);
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
