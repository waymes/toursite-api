import Sequelize, { DataTypes } from 'sequelize';

export const tableName = 'subscribers';

const schema = {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
    allowNull: false,
    unique: true,
  },
  phone: DataTypes.STRING,
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
};

export default schema;
