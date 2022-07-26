import { useState } from 'react'
import Link from 'next/link'

import Layout from './Layout'
import UniversityCard from '../../components/UniversityCard'
import sessionMiddleware from '../../lib/sessionMiddleware'

import cardEditorStyles from '../../styles/universityAdmin/CardEditor.module.css'

export default function CardEditor() {

    const [mottoValue, setMottoValue] = useState("");

    return(
        <Layout>
            <div className={cardEditorStyles.wrapper}>
                <div className={cardEditorStyles.container}>
                    <div className={cardEditorStyles.contentEditor}>
                        <div className={cardEditorStyles.cedForm}>
                            <label htmlFor={"mottoField"}>Motto</label>
                            <input className={cardEditorStyles.cedInput}
                                name={"mottoField"}
                                id={"mottoField"}
                                onChange={(event) => { setMottoValue(event.target.value)}}></input>
                            <Link href="/universityAdmin/facultiesEditor"><div>Poti edita facultatile aici</div></Link>
                        </div>
                        <div className={cardEditorStyles.cedSave}>
                            <button>Save</button>
                        </div>
                    </div>
                    <div className={cardEditorStyles.previewContainer}>
                        <UniversityCard 
                            motto={mottoValue}
                        />
                    </div>
                </div>
            </div>

        </Layout>
    )
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