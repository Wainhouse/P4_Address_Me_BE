import express from 'express';
import { uploadUserAddressData } from '../controllers/uploadUserAddressesController.js';

const router = express.Router();

// Route for uploading addresses
router.post('/uploaduseraddressdata', uploadUserAddressData);

export default router;