import { DataTypes } from 'sequelize';

export const tableName = 'trips';

const schema = {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataTypes.STRING,
};

export default schema;
