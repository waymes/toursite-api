import Sequelize from 'sequelize';

import config from '../src/config';

const { connection, ...options } = config.database;

const db = new Sequelize(
  connection.database,
  connection.username,
  connection.password,
  options,
);

export const drop = () => {
  db.getQueryInterface().dropAllTables().then(() => process.exit());
};

export const init = () => {
  // eslint-disable-next-line global-require
  const initial = require('./migrations/initial');
  initial.up(db.getQueryInterface()).then(() => process.exit());
};
