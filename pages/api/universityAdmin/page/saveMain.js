
import connectMongo from '../../../../utils/connectMongo'



export default async function handler(req, res) {
    if(req.method != 'POST') return res.status(501);

    let sid = 'fasdfasdfasdf'
    //do sid validation
    if(!req.body) return res.status(400);
    if(!req.body.pageContent) return res.status(400);

    await connectMongo();
}