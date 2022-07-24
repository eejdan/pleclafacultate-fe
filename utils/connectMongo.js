
import mongoose from 'mongoose';

const connectMongo = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'plecLaFacultate',
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};

export default connectMongo;