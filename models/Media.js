
import { Schema, model, models } from 'mongoose';

var mediaSchema = new Schema({
    metaScope: String,
    media: {
        data: Buffer,
        contentType: String
    },
    desc: String
}, {
    collection: 'media'
});

const Media = models.Media || model('Media', mediaSchema);

module.exports = Media