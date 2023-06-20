// connection to the database using Sequelize and the .env file to hide sensitive data
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// use JawsDB for Heroku deployment or local MySQL database for local deployment
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;
