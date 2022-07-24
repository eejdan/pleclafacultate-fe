
const { Schema, model, models } = require('mongoose')

const facultyTypeSchema = new Schema({
    displayName: String,
    shortName: String
}, {
    collection: 'facultyTypes'
})

const FacultyType = models.FacultyType || model("FacultyType", facultyTypeSchema)

module.exports = FacultyType;