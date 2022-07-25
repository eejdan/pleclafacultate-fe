import mongoose, { Schema, model, models } from 'mongoose';

var roleSchema = new Schema({
    rType: String,
    rHandle: mongoose.SchemaTypes.ObjectId
})

const userSchema = new Schema({
    username: String,
    password: String,
    roles: [roleSchema]
}, {
    collection: 'users'
})

const User = models.User || model('User', userSchema);

module.exports = User;