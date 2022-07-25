
import { NextResponse } from 'next/server'

import { 
    allocateNewSessionId, 
    getSession, 
    setSessionProperty 
} from '../lib/sessionManager'

export async function middleware(req) {

    const res = NextResponse.next()
    var cookieQueue = [];
    var sid, session;
    if(!req.cookies.sid) {
        let newSid = allocateNewSessionId();
        cookieQueue.push(`sid=${sid}`);
        sid = newSid
    } else {
        let newSession = getSession(req.cookies.sid);
        if(!newSession ) {
            let newSid = allocateNewSessionId();
            cookieQueue.push(`sid=${sid}`);
            sid = newSid;
        } else { sid = req.cookies.sid; session = newSession }
    }

    res.setHeader('set-cookie', cookieQueue)
    
    console.log(session, sid);
    return res;
}