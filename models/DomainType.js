
const { Schema, model, models } = require('mongoose')

const domainTypeSchema = new Schema({
    displayName: String,
    shortName: String
}, {
    collection: 'domainTypes'
})

const DomainType = models.DomainType || model("DomainType", domainTypeSchema)

module.exports = DomainType;