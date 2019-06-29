import db from '../src/db';

export const drop = () => {
  db.getQueryInterface().dropAllTables().then(() => process.exit());
};

export const init = () => {
  // eslint-disable-next-line global-require
  const initial = require('./migrations/initial');
  initial.up(db.getQueryInterface()).then(() => process.exit());
};
