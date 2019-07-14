import { DataTypes } from 'sequelize';

export const tableName = 'admin_users';

const schema = {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

export default schema;
