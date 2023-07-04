import Changes from '../models/Changes.js';
import CorrectedAddressData from '../models/CorrectedAddressData.js';
import UserAddressData from '../models/UserAddressData.js';


export async function getChanges(req, res) {
  try {
    // Fetch all changes from the database
    const changes = await Changes.find();

    res.status(200).json({ message: 'Changes retrieved successfully', changes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to retrieve changes' });
  }
}


export async function getUserCorrectedDataset(req, res) {
  try {
    // Fetch all changes from the database
    const correctedAddressData = await CorrectedAddressData.find();

    res.status(200).json({ message: 'Corrected Address Data retrieved successfully', correctedAddressData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to retrieve Corrected Address Data' });
  }
}

export async function getUserIncorrectDataset(req, res) {
  try {
    // Fetch all changes from the database
    const userIncorrectDataset = await UserAddressData.find();

    res.status(200).json({ message: 'User Address Data retrieved successfully', UserAddressData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to retrieve User Address Data' });
  }
}

