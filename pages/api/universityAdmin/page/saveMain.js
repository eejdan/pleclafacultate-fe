
import connectMongo from '../../../../utils/connectMongo'



export default async function handler(req, res) {
    if(req.method != 'POST') return res.status(501);

    if(req.cookies)

    await connectMongo();
}