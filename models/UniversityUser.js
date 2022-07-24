import mongoose, { Schema, model, models } from 'mongoose';

const universityUserSchema = new Schema({
    username: String,
    password: String,
    university: mongoose.SchemaTypes.ObjectId,
}, {
    collection: 'universityUsers'
})

const UniversityUser = models.UniversityUser || model('UniversityUser', universityUserSchema);

module.exports = UniversityUser;