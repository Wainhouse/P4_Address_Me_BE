import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';
import MongoStore from 'connect-mongo';

import './db/connection.js';

import bodyParser from 'body-parser'

// Routes Import
import authRoute from './routes/authRoute.js';
import addressRoute from './routes/addressRoute.js';
import userAddressRoute from './routes/userAddressDataRoute.js'


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Run DB config
import './db/connection.js';

// Use passport local strategy
import './config/passport.js';

// Create a session cookie
app.use(

  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      collection: 'sessions',
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);

// Reinitialize/refresh passport middleware to avoid stale session data - e.g. a session may have expired since the last request
app.use(passport.initialize());


// Hook into express-session and use the session for authentication
app.use(passport.session());

app.get('/api', (req, res) => {

  res.status(200).json({ message: 'Welcome to AddressMe' });
});

//Routes  
app.use('/api/auth', authRoute);
app.use('/api/address', addressRoute);
app.use('/api/useraddress', userAddressRoute);

app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes

  // Handle specific error types
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: 'Validation error' });
  }

  // General error handling
  res.status(500).json({ message: 'Internal server error' });
});

const { PORT = 9090 } = process.env;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);

});

export default app;