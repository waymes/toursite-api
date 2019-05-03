const express = require('express');
const config = require('./config');

const server = express();

server.get('/', (req, res) => {
  res.status(200).send('Hi there');
})

server.listen(config.PORT, () => console.log('listening'));