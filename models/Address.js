const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Address = sequelize.define("Address", {
  addressLine: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Each address belongs to a single user
Address.belongsTo(User, { foreignKey: "UserId" });

module.exports = Address;
