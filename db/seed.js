import mongoose from 'mongoose';

// Models
import Address from '../models/Address.js';

// Test data
import addressData from './data/dev-data/addressData.js';

// Connect to DB

mongoose
  .connect('mongodb+srv://waynewainhouse:Q8wzWGDoWTUhqPHJ@addressme.7hxrqln.mongodb.net/dev?retryWrites=true&w=majority', {
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