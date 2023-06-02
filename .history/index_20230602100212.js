import dotenv from 'dotenv';
import express from 'express';


// Routes


// Utils


dotenv.config();
const app = express();

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Welcome to AddressMe' });
  });


const { PORT = 9090 } = process.env;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);

});

export default app;