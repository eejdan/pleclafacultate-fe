import React, { useRef, useState } from 'react'

/* import connectMongo from '../../utils/connectMongo'
import DomainType from '../../models/DomainType' */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer, faPlus } from '@fortawesome/free-solid-svg-icons';

//import EditorContainer from "../../components/EditorContainer";
import Layout from "./Layout";

import sessionMiddleware from '../../lib/sessionMiddleware'

import styles from '../../styles/universityAdmin/FacultiesPageEditor.module.css'
import { Editor } from '@tinymce/tinymce-react';
import EditorContainer from '../../components/EditorContainer';
export default function FacultiesPageEditor(props) {
    const [currentIndex, setCurrentIndex] = useState("invalid");
    const [currentFaculty, setCurrentFaculty] = useState(null);

    const [showInfoTab, setShowInfoTab] = useState(false);
    const [showPageTab, setShowPageTab] = useState(false);
    const [showGuideTab, setShowGuideTab] = useState(true);

    var faculties, build = {};

    if (props.faculties) faculties = JSON.parse(props.faculties);
    else faculties = [
        {
            label: 'SAIAPM',
            info: {
                admission: { label: 'Concurs', value: 'concurs' }
            },
            pageContent: '<p>Test</p>',
            guideContent: '<p>Not a Test</p>'
        },
        {
            label: 'Informatica',
            infoContent: {
                admission: { label: 'Concurs', value: 'concurs' }
            },
            pageContent: '<p>Test</p>',
            guideContent: '<p>Not a Test</p>'
        }
    ]

    for (let i = 0; i < faculties.length; i++) {
        faculties[i].itr = i;
        faculties[i].last = 'page';
        // eslint-disable-next-line
        faculties[i].ref = useRef(null);
    }
    const changeFaculty = (itr) => {
        setCurrentIndex(itr);
        setCurrentFaculty(itr);

        faculties[itr].ref.current.style.visibility = 'visible';
        faculties[itr].ref.current.style.width = 'initial';
        faculties[itr].ref.current.style.height = 'initial';
        
    }
    const changeTab = (tab) => {
        setShowInfoTab(false)
        setShowPageTab(false)
        setShowGuideTab(false)
        switch (tab) {
            case 'info':
                setShowInfoTab(true)
                break;

            case 'page':
                setShowPageTab(true)
                break;

            case 'guide':
                setShowGuideTab(true)
                break;
        }
    }


    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div>Aici puteti edita informatiile despre facultatile din cadrul universitatii dumneavoastra</div>
                        <div>
                            TBD
                        </div>
                    </div>
                    <div className={styles.facultiesBuildContainer}>
                        <div className={styles.facultiesList}>
                            <div className={styles.facultiesListHeader}>
                                Facultati{" "}<FontAwesomeIcon icon={faHandPointer} transform={{ rotate: 20 }} />
                            </div>
                            {faculties.map(fc =>
                                <div key={fc.itr}
                                    className={styles.facultiesListItem}
                                    onClick={() => { changeFaculty(fc.itr) }}>
                                    {fc.label}
                                </div>)
                            }
                            <div className={styles.facultiesListItem} onClick={() => console.log("test")}>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>

                        </div>
                        <div>
                            {
                            faculties.map(fc => {
                                return(
                                    <div ref={fc.ref} key={fc.i} style={{ flexGrow: '2', visibility: 'hidden', width: '0', height: '0'}}>
                                        <FcEditorContainer 
                                            title={fc.label}
                                        />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

function FcEditorContainer(props) {

    const [showInfoTab, setShowInfoTab] = useState(false);
    const [showPageTab, setShowPageTab] = useState(false);
    const [showGuideTab, setShowGuideTab] = useState(true);

    /* const infoRef = useRef(null);
    const pageRef = useRef(null);
    const guideRef = useRef(null); */

    const changeTab = (tab) => {
        setShowInfoTab(false)
        setShowPageTab(false)
        setShowGuideTab(false)
        switch (tab) {
            case 'info':
                setShowInfoTab(true)
                break;

            case 'page':
                setShowPageTab(true)
                break;

            case 'guide':
                setShowGuideTab(true)
                break;
        }
    }



    return (
        <div className={styles.fcEditorContainer}>
            <div className={styles.fcEditorHeader}>
                <div className={styles.fcTitle}>{props.title}</div>
                <div className={styles.fcEditorTabs}>
                    <div className={styles.fcEditorTab}
                        onClick={() => { changeTab('info') }}
                    >Informatii</div>
                    <div className={styles.fcEditorTab}
                        onClick={() => { changeTab('page') }}
                    >Pagina</div>
                    <div className={styles.fcEditorTab}
                        onClick={() => { changeTab('guide') }}
                    >Ghid de admitere</div>
                </div>
            </div>

            <div className={styles.fcEditor}>
                <div style={{
                    display: (showInfoTab ? "block" : "none")
                }}>
                    <InfoTab />
                </div>
                <div style={{
                    display: (showPageTab ? "block" : "none")
                }}>
                    <EditorContainer
                        save={(text) => { saveEditor('page') }}
                    />
                </div>
                <div style={{
                    display: (showGuideTab ? "block" : "none")
                }}>
                    <EditorContainer />
                </div>
            </div>
        </div>
    )
}


function InfoTab() {
    return (
        <div className={styles.infoEditorWrapper}>
            <div className={styles.infoEditorContainer}>
                <div>Adresa</div>
                <div><input></input></div>
            </div>

        </div>
    )
}

function InfoTabItem() {
    return (<div> </div>)
}
export async function getServerSideProps(context) {

    // console.log(sessionContainer);
    let sessionContainer = sessionMiddleware(context)
    if (sessionContainer.currentSession.univ == false) {
        return {
            redirect: {
                destination: '/universityAdminAuth',
                permanent: false
            }
        }
    }

    return {
        props: {
            sid: sessionContainer.currentSid
        }
    };

}


/* export async function getServerSideProps(context) {
    var container = { props: { } };

    await connectMongo();
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

    return container;

} */