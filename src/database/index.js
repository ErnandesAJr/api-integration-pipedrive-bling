import mongoose from 'mongoose';
import config from '../config/database.js';

const URI = 
  `mongodb+srv://${config.username}:${config.password}@${config.uri}/${config.database}?retryWrites=true&w=majority`

const connectDB = async () => {
  await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
  console.log('Connected to the database  ... !')
  
}
  
export default connectDB;