import React, { useRef, useState } from 'react'

import sessionMiddleware from '../../lib/sessionMiddleware'
import connectMongo from '../../utils/connectMongo'
import University from '../../models/University'
import QuillDoc from '../../models/QuillDoc'

import Layout from './Layout'
import EditorContainer from '../../components/EditorContainer'

import styles from '../../styles/universityAdmin/MainpageEditor.module.css'

export default function MainpageEditor(props) {

    const [image, setImage] = useState(props.imageurl)
    const imgInputRef = useRef(null);
    console.log(props.qdid);

    const handleSave = (content) => {
        fetch('/api/universityAdmin/page/saveMain', {
            method: 'post',
            body: JSON.stringify({
                qdid: props.qdid,
                content: content 
            })
        })
    }

    const handleSaveImage = () => {
        fetch('/api/universityAdmin/page/image', {
            method: 'post',
            body: JSON.stringify({
                univId: props.univId,
                imgurl: imgInputRef.current.value
            })
        })
    }
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div>Aici puteti edita pagina principala a spatiului virtual al universitatii</div>
                        <div style={{ display: 'flex', flexDirection:'column', width: '100%'}}>
                            <div>Link imagine</div>
                            <div><input ref={imgInputRef}></input>
                            <button onClick={handleSaveImage}>Salveaza</button></div>
                        </div>
                    </div>
                    <EditorContainer handleSave={handleSave} default={props.pageContent}/>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    let sessionContainer = await sessionMiddleware(context)
    console.log(sessionContainer);
    
    if (sessionContainer.currentSession.store.univ == false) {
        return {
            redirect: {
                destination: '/universityAdminAuth',
                permanent: false
            }
        }
    }
    var qdid, imageurl;
    var content = "";
    await connectMongo();
    var univ = await University.findById(sessionContainer.currentSession.store.univ).exec();
    if(!univ.mainPage) {
        let qd = new QuillDoc({
            metaScope: 'univ-mainPage',
            quillContent: content
        });
        await qd.save();
        univ.mainPage = qd._id;
        await univ.save();
        qdid = qd._id;
    } else {
        let qd = await QuillDoc.findById(univ.mainPage).lean().exec();
        content = qd.quillContent;
        qdid = qd._id;
    }
    if(!univ.imageUrl) {
        imageurl = 'https://static.vecteezy.com/system/resources/previews/004/851/941/original/university-logo-or-education-logo-concept-illustration-university-logo-design-template-vector.jpg'
        univ.imageUrl = imageurl;
        await univ.save();
    } else {
        imageurl = univ.imageUrl
    }

    return {
        props: {
            univId: univ._id.toString(),
            imageurl: imageurl,
            qdid: qdid.toString(),
            pageContent: content,
            sid: sessionContainer.currentSid
        }
    };

}
