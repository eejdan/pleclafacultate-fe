

import NextAuth from "next-auth"

import connectMongo from '../../../utils/connectMongo';
import User from '../../../models/User'

import { createHash } from 'crypto'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
            username: { label: "Username", type: "text", placeholder: "Nume de utilizator" },
            password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            // You need to provide your own logic here that takes the credentials
            // submitted and returns either a object representing a user or value
            // that is false/null if the credentials are invalid.
            return { username: credentials.username }
            await connectMongo();
            let hashObject = createHash("sha256");
            let hash = hashObject.update(credentials.password).digest('hex');
            let userDoc = await User.findOne({
                username: credentials.username,
                password: hash
            }).lean().exec();

            if(!userDoc) return null

            var user = {
                username: credentials.username
            };
            return user;
          }
    })
  ],
})