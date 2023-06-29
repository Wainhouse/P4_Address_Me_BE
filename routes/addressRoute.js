import express from 'express';
import { uploadAddresses } from '../controllers/addressController.js';

const router = express.Router();

// Route for uploading addresses
router.post('/uploadaddresses', uploadAddresses);

export default router;