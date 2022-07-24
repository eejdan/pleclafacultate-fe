import dynamic from 'next/dynamic';
import styles from '../../styles/universityAdmin/MainpageEditor.module.css'
import Layout from './Layout'

import quillImageHandler from '../../utils/quillImageHandler'

const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false
  });

var toolbarContainer = [
    ['bold', 'italic', 'underline', 'strike'],       
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],  
    [{ 'color': [] }, { 'background': [] }],         
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                        
    ['image'] //add image here
]; 

export default function MainpageEditor() {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <ReactQuill 
                        modules={{
                            toolbar: {
                                container: toolbarContainer,
                                handlers: {
                                    image: quillImageHandler
                                }
                            }
                        }}
                    />
                </div>
            </div>            
        </Layout>
    )
}