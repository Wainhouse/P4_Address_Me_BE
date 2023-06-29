import mongoose from 'mongoose';
import userAddressSchema from '../schemas/UploadUserAdresses.js'


const UserAddressData = '../models/UserAddressData.js'

export async function uploadUserAddressData(req, res) {
  const addressData = req.body;
  const username = req.user
  console.log({ username });
  const user = username.username
  const collectionName = `${user}_addresses`;
  console.log({ user });




  try {
    const collectionExists = await mongoose.connection.db.listCollections({ name: collectionName }).hasNext();
    if (!collectionExists) {
      await mongoose.connection.db.createCollection(collectionName);
    }

    const UserAddressDynamic = mongoose.model('UserAddressData', userAddressSchema, collectionName);

    // Insert the addresses into the user address database
    const insertedUserAddressData = await UserAddressDynamic.insertMany(addressData);


    res.status(201).json({ message: 'User address data uploaded successfully.', userAddressData: insertedUserAddressData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to upload user address data.' });
  }
}
