import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import express from 'express';
import geoip from 'geoip-lite';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// Middlewares de seguridad y CORS
app.use(helmet());
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API para la plataforma de registro y listado de usuarios.');
});


app.get('/api/users/get-all', (req, res) => {
  // Devolvemos todos los registros

  res.json({
    timestamp: Date.now(),
    texto: "Hola Mundo",
  });
});

app.get('/api/users/get-by-id/:id', (req, res) => {
  // Devolvemos el registro con el ID solicitado

  res.json({
    timestamp: Date.now(),
    texto: "Hola Mundo",
  });
});

app.post('/api/users/create', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const geo = geoip.lookup(ip) || {};
  const region = geo.region || 'N/A';
  const userData = req.body;
  const timestamp = Date.now();

  res.json({
    ...userData,
    ip,
    region,
    timestamp,
  });
});

app.put('/api/users/update/:id', (req, res) => {
  // Actualizamos el registro con el ID solicitado

  res.json({
    timestamp: Date.now(),
    texto: "Hola Mundo",
  });
});

app.delete('/api/users/delete/:id', (req, res) => {
  // Eliminamos el registro con el ID solicitado

  res.json({
    timestamp: Date.now(),
    texto: "Hola Mundo",
  });
});

if (process.env.NODE_ENV == 'development') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;