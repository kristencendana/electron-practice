const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const application = express();
const port = process.env.PORT;

application.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

application.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});