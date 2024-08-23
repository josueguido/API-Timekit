import cookieParser from 'cookie-parser'
import express from 'express'
import { PORT } from './config.js'
import projectRoutes from './routes/proyectRoutes.js'
import bookingsRoutes from './routes/bookingsRoutes.js'
import cors from 'cors'
const app = express();

app.set('view engine', 'ejs');

const ACCEPTED_ORIGIN = [
  'http://localhost:4200'
]

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || ACCEPTED_ORIGIN.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}

app.use(cors(corsOptions))

app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('API de Timekit');
});

app.use('/proyectos', projectRoutes);

app.use('/api/bookings', bookingsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
