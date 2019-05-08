import express from 'express';

import config from './config';

const server = express();

server.get('/', (req, res) => {
  res.status(200).send('Hi theres');
})

server.listen(config.PORT, () => console.log('listening'));