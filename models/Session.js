

import { Schema, model, models } from 'mongoose'

const sessionSchema = new Schema({
    sessionString: String,
    store: {
        type: Object,
        default: {}
    }
}, {
    collection: 'sessions'
})

const Session = models.Session || model("Session", sessionSchema)

module.exports = Session;