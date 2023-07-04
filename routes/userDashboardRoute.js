import express from 'express';
import { getChanges, getUserCorrectedDataset, getUserIncorrectDataset } from '../controllers/userDashboardController.js';

const router = express.Router();

// Route for uploading addresses
router.get('/changes', getChanges);

router.get('/correctaddressdata', getUserCorrectedDataset);

router.get('/incorrectaddressdata', getUserIncorrectDataset);


export default router;