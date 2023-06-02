import express from 'express';

import { registerUser } from '../controllers/authController.js';
  
const router = express.Router();


router.post('/signup', registerUser);



router.use((err, req, res, next) => {
    // Duplicate Key Error (Email already in-use)
    if (err.name === 'MongoServerError' && err.code === 11000) {
      console.error(`${err.name} - ${err.message}`);
      return res.status(403).json({ message: 'username already in use' });
    }
  });
  

export default router;  