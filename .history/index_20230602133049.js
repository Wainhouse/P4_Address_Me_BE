import express from 'express';
import cors from 'cors';
import './db/connection.js';


// Routes
import authRoute from './routes/authRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Reinitialize/refresh passport middleware to avoid stale session data - e.g. a session may have expired since the last request
app.use(passport.initialize());
// Hook into express-session and use the session for authentication
app.use(passport.session());

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Welcome to AddressMe' });
  });
  
app.use('/api/auth', authRoute);

const { PORT = 9090 } = process.env;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);

});

export default app;