import Sequelize, { DataTypes } from 'sequelize';

export const tableName = 'trips';

const schema = {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataTypes.STRING,
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
};

export default schema;
