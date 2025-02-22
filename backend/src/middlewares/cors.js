import cors from 'cors';

const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS || '*', // No especificamos el dominio para que sea accesible desde cualquier origen
  optionsSuccessStatus: 200,
};

export default cors(corsOptions);