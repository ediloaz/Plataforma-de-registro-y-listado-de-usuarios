// src/index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import corsMiddleware from './middlewares/cors.js';
import helmet from 'helmet';
import errorHandler from './middlewares/errorHandler.js';
import userRoutes from './routes/userRoutes.js';
import config from './config/index.js';

dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middlewares de seguridad
app.use(helmet());
app.use(corsMiddleware);

// Montar las rutas bajo el prefijo /api/users
app.use('/api/users', userRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

// Conectar a MongoDB (si se usa)
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Levantar el servidor en desarrollo
if (process.env.NODE_ENV == 'development') {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
}

export default app;
