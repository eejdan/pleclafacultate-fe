
import { Schema, model, models } from 'mongoose'

const domainTypeSchema = new Schema({
    displayName: String,
    shortName: String
}, {
    collection: 'domainTypes'
})

const DomainType = models.DomainType || model("DomainType", domainTypeSchema)

module.exports = DomainType;