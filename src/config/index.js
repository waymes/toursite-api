export default {
  PORT: process.env.PORT,
  CLIENT_URLS: ['http://localhost:3000', 'https://toursite.herokuapp.com'],
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
    },
  },
  sendGridKey: process.env.SENDGRID_KEY,
  ownerEmail: process.env.OWNER_EMAIL,
};
