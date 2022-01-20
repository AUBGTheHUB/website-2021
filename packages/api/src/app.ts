import express from 'express';

import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is now running on ${PORT}...`);
})
