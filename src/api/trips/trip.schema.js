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
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title1: DataTypes.STRING,
  title2: DataTypes.STRING,
  destination: DataTypes.STRING,
  name: DataTypes.STRING,
  difficultyLevel: DataTypes.INTEGER,
  firstBlockTitle: DataTypes.STRING,
  firstBlockItems: DataTypes.JSON,
  secondBlockTitle: DataTypes.STRING,
  secondBlockItems: DataTypes.JSON,
  thirdBlockTitle: DataTypes.STRING,
  thirdBlockItems: DataTypes.JSON,
  fourthBlockTitle: DataTypes.STRING,
  fourthBlockItems: DataTypes.JSON,
  fifthBlockTitle: DataTypes.STRING,
  fifthBlockItems: DataTypes.JSON,
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  additionalExpenses: DataTypes.JSON,
};

export default schema;
