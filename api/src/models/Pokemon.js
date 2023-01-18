const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health: {
      type: DataTypes.INTEGER,
      defaultValue: 100
    },
    damage: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    },
    def: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    },    
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    },    
  },{timestamps: false});
};