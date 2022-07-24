
import { Schema, model, models } from 'mongoose';

var citySchema = Schema({
    displayName: {
        type: String,
        required: true
    },
    shortName: String, // "GL"
    altNames: String, // "cnaic cuzaro"
}, {
    collection: 'cities',
    collation: {
        locale: 'en',
        strength: 1
    }
});

citySchema.index(
    {
        displayName: 'text',
        shortName: 'text',
        altNames: 'text'
    }
)

const City = models.City || model('City', citySchema);

module.exports = City;