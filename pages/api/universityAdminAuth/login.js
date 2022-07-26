
import { createHash } from 'crypto'

import connectMongo from '../../../utils/connectMongo'
import User from '../../../models/User'

import {
    allocateNewSessionId,
    getSession,
    setSessionProperty
} from '../../../lib/sessionManager'


export default async function handler(req, res)  {
    req.body = JSON.parse(req.body);
    if(req.method != 'POST')
        return res.status(501);
    if(!req.body) return res.status(400);
    if(!req.body.username || !req.body.password) { return res.status(400) }
    var hashObject = createHash('sha256');
    console.log('here');
    var hash = hashObject.update(req.body.password).digest("hex");
    await connectMongo();
    let user = await User.findOne({
        username: req.body.username,
        password: hash
    })
    console.log('test');
    if(!user) { return res.status(200).json({ error: true }) }
    let roleId = false; // TODO
    for(let role of user.roles) {
        if(role.rType == 'univAdmin') {
            roleId = role.rHandle;
            break;
        }
    }
    if(!roleId) return res.status(200).json({ error: true });
    var newSid = await allocateNewSessionId();
    console.log('newid', newSid)
    await setSessionProperty(newSid, 'loggedIn', true);
    await setSessionProperty(newSid, 'univ', roleId);

    setTimeout( async () => 
    {console.log(await getSession(newSid));

    return res.status(200).json({ error: false, sid: newSid });}, 200)
}