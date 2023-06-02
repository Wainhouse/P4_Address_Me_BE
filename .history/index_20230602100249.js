import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import cors from 'cors';

// Routes


// Utils


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Welcome to AddressMe' });
  });


const { PORT = 9090 } = process.env;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);

});

export default app;