import React, { useRef } from 'react'

import sessionMiddleware from '../../lib/sessionMiddleware'
import connectMongo from '../../utils/connectMongo'
import University from '../../models/University'
import QuillDoc from '../../models/QuillDoc'

import Layout from './Layout'
import EditorContainer from '../../components/EditorContainer'

import styles from '../../styles/universityAdmin/MainpageEditor.module.css'

export default function MainpageEditor(props) {

    console.log(props.sid);

    const handleSave = () => {
        fetch('/api/universityAdmin/', {

        })
    }

    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div>Aici puteti edita pagina principala a spatiului virtual al universitatii</div>
                        <div>
                            TBD
                        </div>
                    </div>
                    <EditorContainer />
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    let sessionContainer = await sessionMiddleware(context)
    console.log(sessionContainer);
    
    if (sessionContainer.currentSession.univ == false) {
        return {
            redirect: {
                destination: '/universityAdminAuth',
                permanent: false
            }
        }
    }
    var content = "";
    await connectMongo();
    let univ = await University.findById(sessionContainer.currentSession.store.univ).exec();
    if(!univ.mainPage) {
        let qd = new QuillDoc({
            metaScope: 'univ-mainPage',
            quillContent: content
        });
        await qd.save();
        univ.mainPage = qd._id;
        await univ.save();
    } else {
        let qd = await QuillDoc.findById(univ.mainPage).lean().exec();
        content = qd.quillContent;
    }

    return {
        props: {
            pageContent: content,
            sid: sessionContainer.currentSid
        }
    };

}
