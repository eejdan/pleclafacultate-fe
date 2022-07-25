
const randomBox = 'abcdefghi1234567890'
const _sessionLen = 64;
const store = {
    sessions: {}
}
const allocateNewSessionId = () => {
    let newSessionString = getRandomString(_sessionLen);
    while(true) {
        if(!!(store.sessions[newSessionString])) {
            store.sessions[newSessionString] = { 
                created: Date.now()
            };
            return newSessionString;
        }
        newSessionString = getRandomString(_sessionLen);
    }
}
const getSession = (sid) => {
    if(!!!(sid)) return false;
    if(!store.sessions[sid] || !store.sessions[sid] === {})
        return false;
    return store.sessions[sid];
}
const setSessionProperty = (sid, property, value) => {
    if(!!!(sid)) return false;
    if(!store.sessions[sid] || !store.sessions[sid] === {})
    return false;
    store.sessions[sid][property] = value;
    
    return store.sessions[sid];
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
console.log(getRandomString(32))

export {
    allocateNewSessionId,
    getSession,
    setSessionProperty
}
