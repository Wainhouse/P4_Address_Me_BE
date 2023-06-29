import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fileDirName from '../utils/file-dir-name.js';

const { __dirname } = fileDirName(import.meta);

// Testing lib will automatically set it to 'test'
const ENV = process.env.NODE_ENV || 'development';

// Tell dotenv where to load env vars from
dotenv.config({
  path: `${__dirname}/../.env.${ENV}`,
});

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI not set');
}

// Models
import Address from '../models/Address.js';

// Test data
import addressData from './data/dev-data/addressData.js';

// Connect to DB

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(err);
  });

// seed dbs
export const seedDB = async () => {
  // await Address.deleteMany({});
  await Address.insertMany(addressData);
};



seedDB().then(() => {
  mongoose.connection.close();
})