import UserAddress from '../models/UserAddressData.js';

export async function uploadUserAddressData(req, res) {
  const addressData = req.body;
  try {
    // Insert the addresses into the user address database
    const insertedUserAddressData = await UserAddress.insertMany(addressData);

    res.status(201).json({ message: 'User address data uploaded successfully.', userAddressData: insertedUserAddressData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to upload user address data.' });
  }
}
