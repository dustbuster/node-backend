const mysql = require('mysql2');
const { Sequelize } = require('sequelize');
const config = require('./config');

// Create a MySQL connection using the config settings
const connection = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
  port: config.database.port
});

// Setup Sequelize with the config settings
const sequelize = new Sequelize(
  config.sequelize.database,
  config.sequelize.username,
  config.sequelize.password,
  {
    host: config.sequelize.host,
    dialect: config.sequelize.dialect
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection to MySQL database has been established successfully.');
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });

// Open the MySQL connection
connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Successfully connected to the database.');
});

module.exports = { sequelize, connection };
