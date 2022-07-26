
import connectMongo from '../../../../utils/connectMongo'

import University from '../../../../models/University'
import QuillDoc from '../../../../models/QuillDoc'

export default async function handler(req, res) {
    if(req.method != 'POST') return res.status(501);

    req.body = JSON.parse(req.body);
    console.log(req.body)
    await connectMongo();

    var univ = await University.findById(req.body.univId).exec();
    console.log(univ);
    univ.imageUrl = req.body.imgurl;
    console.log(univ);
    await univ.save();
    res.status(200).json({});

}