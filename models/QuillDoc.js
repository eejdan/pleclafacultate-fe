
import { Schema, model, models } from 'mongoose';

var quillDocSchema = new Schema({
    metaScope: String,
    quillContent: String
}, {
    collection: 'quills'
})

const QuillDoc = models.QuillDoc || model('QuillDoc', quillDocSchema)

module.exports = QuillDoc