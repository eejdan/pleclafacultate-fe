import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false
  });

export default function imageHandler() {
    var range = this.quill.getSelection();
    var value = prompt('please copy paste the image url here.');
    if(value){
        this.quill.insertEmbed(range.index, 'image', value);
    }
}