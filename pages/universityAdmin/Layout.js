import React from 'react';
import Link from 'next/link';

import TitleLogo from '../../components/TitleLogo';

import styles from '../../styles/UniversityAdmin.module.css'

const routes = [
    { displayName: 'Pornire', href: '', type: 'single' },
    { displayName: 'Card de Afisare', href: 'cardEditor', type: 'single'},
    { displayName: 'Informatii', href: 'infoEditor', type: 'single'},
    { displayName: 'Pagini', href: 'mainpageEditor', type: 'multiple',
        items: [{
            displayName: 'Pagina Principala', href: 'mainpageEditor'
        }, {
            displayName: 'Ghid de Admitere', href: 'admissionguideEditor'
        }]
    },       
    { displayName: 'Pagini Aditionale', href: 'additionalEditor', type: 'single'},
    { displayName: 'Facultati', href: 'facultiesEditor', type: 'single'},
    { displayName: 'Previzualizare', href: 'preview', type: 'single'},
]

export default function Layout(props) {

    return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.appHeader}>
                <TitleLogo />
            </div>
            <div className={styles.panelHeader}>
                <div>Universitatea Alexandru Ioan Cuza</div>
            </div>
            <div className={styles.navSidebar}>
                {routes.map(route => {
                    if(route.type != 'multiple') return (<React.Fragment key={'route_'+route.href}>
                        <Link href={'/universityAdmin/'+route.href}><div className={styles.navSingleItem}>{route.displayName}</div></Link>
                    </React.Fragment>)
                    return (
                        <React.Fragment key={'route_'+route.href}>
                            <div className={styles.navSingleItem}>{route.displayName}</div>
                            {route.items.map(route => <React.Fragment key={'mroute_'+route.href}>
                        <Link href={'/universityAdmin/'+route.href}><div className={styles.navMultipleItem}>{route.displayName}</div></Link>
                    </React.Fragment>)}
                        </React.Fragment>
                    )
                })}
            </div>
            <div className={styles.routeContainer}>
                {props.children}
            </div>
        </div>
    </div>
    )
}