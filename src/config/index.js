export default {
  PORT: process.env.PORT,
  CLIENT_URLS: ['http://localhost:3000', 'http://localhost:3001'],
  database: {
    connection: {
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    host: process.env.DB_HOST,
    dialect: 'postgres',
    define: {
      timestamps: false,
      freezeTableName: true,
    },
    logging: false,
  },
  sendGridKey: process.env.SENDGRID_KEY,
  ownerEmail: process.env.OWNER_EMAIL,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: process.env.JWT_EXPIRATION,
};
