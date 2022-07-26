import mongoose, { Schema, model, models } from 'mongoose';

const additionalPageSchema = new Schema({
    displayName: String,
    page: mongoose.SchemaTypes.ObjectId
})

const universitySchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    shortName: {
        type: String,
        default: ''
    }, // "UBB"
    altNames: {
        type: String,
        default: ''
    },
    city: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'cities'
    },
    card: {
        type: Object, 
        default: false
    },
    mainPage: mongoose.SchemaTypes.ObjectId,
    admissionGuidePage: mongoose.SchemaTypes.ObjectId,
    additionalPages: [additionalPageSchema],
    imageUrl: String,
}, {
    collection: 'universities',
    strict: false
});

universitySchema.index(
    { 
        displayName: 'text',
        shortName: 'text',
        altNames: 'text'
    }
)

const University = models.University || model('University', universitySchema);

module.exports = University;