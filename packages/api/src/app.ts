import express from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import {eventRoutes} from '../v1/events/events';

dotenv.config({ path: `${__dirname}/.env` });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(eventRoutes);

if (!process.env.MONGO_URI) {
  console.log('.env not loaded');
  process.exit(1);
}

connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully established connection to database...'))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is now running on ${PORT}...`);
});
