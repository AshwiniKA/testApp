import mongoose from 'mongoose';
import { getConfig } from './config';

const config = getConfig(process.env.NODE_ENV);
mongoose.Promise = global.Promise;

//const dbPath = 'mongodb://localhost:27017/mydb';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
//export const connect = () => mongoose.connect(dbPath, options);


export const connect = () => mongoose.connect(config.MONGO_URI,options);
