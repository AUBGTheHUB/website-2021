import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connect, connection } from 'mongoose';
import { eventRoutes } from '../v1/events/events';
import { signUpRoutes } from '../v1/signup/signUp';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: `${__dirname}/.env` });
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(eventRoutes);
app.use(signUpRoutes);

if (!process.env.MONGO_URI) {
  console.log('MONGO_URI env var is not set!');
  process.exit(1);
}

connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully established connection to database...'))
  .catch((err) => console.log(err));

const server = app.listen(PORT, () => {
  console.log(`Server is now running on ${PORT}...`);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM! Closing database connection and terminating server...');

  connection.close();
  server.close(() => {
    console.log('Server termination successful!');
  });
});

process.on('SIGINT', () => {
  console.log('Received SIGINT! Closing database connection and shutting down server...');

  connection.close();
  server.close(() => {
    console.log('Server shutdown successful!');
  });
});
