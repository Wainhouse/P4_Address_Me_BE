import cors from 'cors';
import './db/connection.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Welcome to AddressMe' });
  });


const { PORT = 9090 } = process.env;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);

});

export default app;