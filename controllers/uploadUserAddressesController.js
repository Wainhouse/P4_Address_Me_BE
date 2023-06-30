import UserAddressData from '../models/UserAddressData.js';

export async function uploadUserAddressData(req, res) {
  const addressDataArray = req.body;
  const username = req.user.username;

  try {
    const userData = {
      username,
      userAddressData: addressDataArray.map(addressData => {
        return { ...addressData };
      })
    };

    const insertedUserData = await UserAddressData.create(userData);

    // Retrieve the inserted user data with the address data
    const populatedUserData = await UserAddressData.findById(insertedUserData._id)
      .select('username')
      .populate('userAddressData', '-_id');

    res.status(201).json({
      message: 'User address data uploaded successfully.',
      userAddressData: populatedUserData
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to upload user address data.' });
  }
}

//   try {
//     const collectionExists = await mongoose.connection.db.listCollections({ name: collectionName }).hasNext();
//     if (!collectionExists) {
//       await mongoose.connection.db.createCollection(collectionName);
//     }

//     const UserAddressDynamic = mongoose.model('UserAddressData', userAddressSchema, collectionName);

//     // Insert the addresses into the user address database
//     const insertedUserAddressData = await UserAddressDynamic.insertMany(addressData);


//     res.status(201).json({ message: 'User address data uploaded successfully.', userAddressData: insertedUserAddressData });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Failed to upload user address data.' });
//   }
// }
