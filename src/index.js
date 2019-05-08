import express from 'express';

import config from './config';

const server = express();

server.get('/', (req, res) => {
  res.status(200).send('Hi there');
});

server.listen(config.PORT, () => {
  console.log(`
╔╦╗╦═╗╦╔═╗  ╔═╗╔╦╗╦  ╦╔═╗╔╗╔╔╦╗╦ ╦╦═╗╔═╗
 ║ ╠╦╝║╠═╝  ╠═╣ ║║╚╗╔╝║╣ ║║║ ║ ║ ║╠╦╝║╣ 
 ╩ ╩╚═╩╩    ╩ ╩═╩╝ ╚╝ ╚═╝╝╚╝ ╩ ╚═╝╩╚═╚═╝
  `);
});
