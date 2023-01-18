const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('type', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoscalable: true,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: "Anonymus"
    },
  });
}