
import mongoose, { connect } from 'mongoose'
import Session from '../models/Session'

const randomBox = 'abcdefghi1234567890'
const _sessionLen = 64;
const store = {
    sessions: {}
}
const allocateNewSessionId = async () => {
    ;
    var newSessionString;
    let found = true;
    do {
        newSessionString = getRandomString(_sessionLen);
        if(await Session.exists({ sessionString: newSessionString }).exec()) {
            found = false;
        }
    } while(!found);
    let container = {} 
    container.created = Date.now() 
    container.loggedIn = false;
    container.univ = false;
    container.admin = false;
    let sesh = new Session({ sessionString: newSessionString, store: container})
    await sesh.save();
    console.log('newsesh', sesh);
    return newSessionString;
}
const getSession = async (sid) => {
    ;
    var sesh = await Session.findOne({ sessionString: sid })
    return sesh;
}
const setSessionProperty = async (sid, property, value) => {
    console.log(sid, property,value);
    var sesh = await Session.findOne({ sessionString: sid }).exec();
    sesh.store[property] = value;
    console.log(sesh);
    sesh.markModified('store')
    await sesh.save();
    return sesh;
}

function getRandomString(len) {
    if(!len) len = 32;
    let newRandomString = ''
    for(let i=0;i<len;i++) {
        newRandomString += 
            randomBox.charAt(
                Math.floor(randomBox.length * Math.random()));
    }
    return newRandomString;
}
mongoose.connect(process.env.MONGO_URI, {
    dbName: 'plecLaFacultate',
    useNewUrlParser: true,
    useUnifiedTopology: true
})

export {
    allocateNewSessionId,
    getSession,
    setSessionProperty
}
