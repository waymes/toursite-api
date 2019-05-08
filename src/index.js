import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

import config from './config';
import { allowCrossDomain, errorHandler } from './middlewares';
import routes from './routes';

const app = express();

// App setup
app.use(bodyParser.json({ type: '*/*' }));
app.use(allowCrossDomain);
routes(app);
app.use(errorHandler);

// Server setup
const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`
╔╦╗╦═╗╦╔═╗  ╔═╗╔╦╗╦  ╦╔═╗╔╗╔╔╦╗╦ ╦╦═╗╔═╗
 ║ ╠╦╝║╠═╝  ╠═╣ ║║╚╗╔╝║╣ ║║║ ║ ║ ║╠╦╝║╣ 
 ╩ ╩╚═╩╩    ╩ ╩═╩╝ ╚╝ ╚═╝╝╚╝ ╩ ╚═╝╩╚═╚═╝
  `);
});
