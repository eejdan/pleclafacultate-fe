
import connectMongo from '../../../../utils/connectMongo'

import QuillDoc from '../../../../models/QuillDoc'

export default async function handler(req, res) {
    if(req.method != 'POST') return res.status(501);

    req.body = JSON.parse(req.body);
    console.log(req.body)
    await connectMongo();

    var univ = await University.findById(sessionContainer.currentSession.store.univ).exec();

    univ.imageUrl = req.body.imageurl;

    await univ.save()
    res.status(200).json({});

}