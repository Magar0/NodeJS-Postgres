const { Sequelize } = require("sequelize");
const dotEnv = require("dotenv");
dotEnv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || "your_database_name",
  process.env.DATABASE_USERNAME || "your_username",
  process.env.DATABASE_PASSWORD || "your_password",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    logging: false,
  }
);

module.exports = sequelize;
