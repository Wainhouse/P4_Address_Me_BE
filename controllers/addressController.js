import Address from '../models/Address.js';

export async function uploadAddresses(req, res) {
  const addresses = req.body;
  console.log({ addresses });
  try {
    // Insert the addresses into the database
    const insertedAddresses = await Address.insertMany(addresses);

    res.status(201).json({ message: 'Addresses uploaded successfully', addresses: insertedAddresses });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to upload addresses' });
  }
}
