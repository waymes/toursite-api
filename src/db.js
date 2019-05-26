import Sequelize from 'sequelize';
import config from './config';

const { connection, ...options } = config.database;

const db = new Sequelize(
  connection.database,
  connection.username,
  connection.password,
  options,
);

export default db;
