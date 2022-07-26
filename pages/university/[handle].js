import { useRouter } from 'next/router'
import connectMongo from '../../utils/connectMongo';
import UniversityPage from './index'
import University from '../../models/University'
import QuillDoc from '../../models/QuillDoc'

export default function UniversityByHandle(props) {
    const router = useRouter();
    const { handle } = router.query;



    return (
        <div>
            <UniversityPage imageurl={props.imageurl} content={props.content} />
        </div>
    )
}

export async function getServerSideProps(context) {
    await connectMongo();
    var univ = await University.findOne({
        shortName: context.query.handle.toUpperCase()
    })
    if(!univ || !univ.mainPage) { return { redirect: { destination: '/finder', permanent: false }}}
    
    var qd = await QuillDoc.findById(univ.mainPage);
    var qdcontent = qd.quillContent || '';

    return { 
        props: {
            imageurl: univ.imageUrl || '',
            content: qdcontent
        }
    }
}