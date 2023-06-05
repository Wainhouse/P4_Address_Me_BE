// Models
import User from '../models/User.js';

// Test data
import testUsers from './data/test-data/users.js';


// seed dbs
export const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(testUsers);
};