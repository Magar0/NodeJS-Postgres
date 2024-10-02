const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
// const Address = require("./Address");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// One user can have many addresses
// User.hasMany(Address, { foreignKey: "UserId" });

module.exports = User;
