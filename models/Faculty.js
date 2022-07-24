import mongoose, { Schema, model, models } from 'mongoose';

const facultySchema = new Schema({
    displayName: {
        type: String,
        required: true
    },
    university: mongoose.SchemaTypes.ObjectId,
    expertises: [String]
}, {
    collection: 'faculties'
})