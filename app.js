import cookieParser from 'cookie-parser'
import express from 'express'
import { PORT } from './config.js'
import projectRoutes from './routes/proyectRoutes.js'
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('API de Timekit');
});

app.use('/proyectos', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
