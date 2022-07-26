import React, { useRef } from 'react'


import { Editor } from '@tinymce/tinymce-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';


export default function EditorContainer(props) {



    const editorRef = useRef(null);

        

    var save = props.save || function() {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
        props.handleSave(editorRef.current.getContent())
    }
    return (
        <div>
            Recomanadăm sa intrati in modul fullscreen <FontAwesomeIcon icon={faMaximize} />
            <Editor
                apiKey={"ekq46sr7mn7jnrhi84k18yjxdpxtjdfesnowejeug9yq4eex"}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={ props.pageContent || " "}
                onChange={(value) => { props.handleSave(editorRef.current.getContent()) }}
                init={{
                    height: 300,
                    menubar: true,
                    plugins: [
                        'advlist', 'anchor', 'autolink', 'autosave', 'codesample', 'fullscreen', 'help',
                        'image', 'lists', 'link', 'media', 'preview',
                        'searchreplace', 'table', 'template', 'visualblocks', 'wordcount',
                    ],

                    toolbar: 'fullscreen | insertfile a11ycheck undo redo | bold italic | forecolor backcolor | table | alignleft aligncenter alignright alignjustify | bullist numlist | link image',
                    
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <button onClick={save}>Save</button>
        </div>
    )
}
