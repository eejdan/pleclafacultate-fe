
import connectMongo from '../../../../utils/connectMongo'

import QuillDoc from '../../../../models/QuillDoc'

export default async function handler(req, res) {
    if(req.method != 'POST') return res.status(501);

    req.body = JSON.parse(req.body);
    console.log(req.body)
    await connectMongo();

    let qd = await QuillDoc.findById(req.body.qdid).exec();

    qd.quillContent = req.body.content;

    await qd.save();
    res.status(200).json({});

}