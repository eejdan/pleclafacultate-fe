import * as cookie from 'cookie'

import {
    allocateNewSessionId,
    getSession,
    setSessionProperty
} from '../lib/sessionManager'

export default async function sessionMiddleware(context) {
    
    var cookieQueue = [];
    var cookies;
    var sid, session;

    async function newSessionCookie() {
        let newSid = await allocateNewSessionId();
        cookieQueue.push('sid=' + newSid+'; path=/');
        return newSid;
    }

    if (!context.req.headers.cookie) {
        sid = await newSessionCookie();
        session = await getSession(sid);
        console.log(sid, session);
    } else {
        cookies = cookie.parse(context.req.headers.cookie);
        console.log(cookies);
        {
            let newSession = await getSession(cookies.sid);
            
            console.log('news: ', newSession)
            if (newSession == 'invalid') {
                let newSid = await allocateNewSessionId();
                cookieQueue.push('sid=' + newSid+'; path=/');
                sid = newSid;
                session = await getSession(newSid);
                console.log('session got:', session)
            } else { sid = cookies.sid; session = newSession }
        }
        console.log(sid, session)
    
        context.res.setHeader('set-cookie', cookieQueue);
    }
    return {
        currentSid: sid,
        currentSession: session
    }
}