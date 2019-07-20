import Sequelize, { DataTypes } from 'sequelize';

export const tableName = 'trips';

const schema = {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: DataTypes.DATE,
  dateFrom: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateTo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  backgroundImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  destination: DataTypes.STRING,
  name: DataTypes.STRING,
  blockTitle1: DataTypes.STRING,
  blockItems1: DataTypes.JSON,
  blockTitle2: DataTypes.STRING,
  blockItems2: DataTypes.JSON,
  blockTitle3: DataTypes.STRING,
  blockItems3: DataTypes.JSON,
  blockTitle4: DataTypes.STRING,
  blockItems4: DataTypes.JSON,
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  includedList: DataTypes.JSON,
  additionalList: DataTypes.JSON,
};

export default schema;
